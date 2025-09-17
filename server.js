// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { User, Group, Note, Link, ChatMessage } = require("./models"); // Ensure models/index.js exports them

const PORT = process.env.PORT || 5000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

const app = express();
app.use(express.json());
// app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(cors({ origin: "*"}));


// Static uploads folder
const UPLOAD_DIR = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);
app.use("/uploads", express.static(UPLOAD_DIR));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const unique = Date.now() + "_" + Math.random().toString(36).slice(2, 8);
    const safe = file.originalname.replace(/\s+/g, "_");
    cb(null, unique + "_" + safe);
  }
});
const upload = multer({ storage });

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(e => {
  console.error("MongoDB connection error:", e);
  process.exit(1);
});

// Helper function to generate group code
function genCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

// ---------- AUTH ROUTES ----------

app.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: "Username and password required" });

    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ error: "User already exists" });

    const user = new User({ username, password });
    await user.save();
    res.json({ success: true, user_id: user._id, username: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    res.json({ success: true, user_id: user._id, username: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- GROUP ROUTES ----------
app.post("/api/groups/:groupCode/remove-member", async (req, res) => {
  try {
    const code = req.params.groupCode.trim().toUpperCase();
    const { user_id, member_id } = req.body;

    if (!user_id || !member_id) {
      return res.status(400).json({ error: "user_id and member_id are required" });
    }

    const group = await Group.findOne({ code });
    if (!group) return res.status(404).json({ error: "Group not found" });

    // Only owner can remove members
    if (String(group.ownerId) !== String(user_id)) {
      return res.status(403).json({ error: "Only group owner can remove members" });
    }

    // Prevent owner from removing themselves
    if (String(user_id) === String(member_id)) {
      return res.status(400).json({ error: "Owner cannot remove themselves" });
    }

    group.members = group.members.filter(
      (id) => String(id) !== String(member_id)
    );

    await group.save();
    res.json({ success: true, group });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/groups/create", async (req, res) => {
  try {
    const { user_id, name, description } = req.body;
    if (!user_id || !name)
      return res.status(400).json({ error: "user_id and name required" });

    const owner = await User.findById(user_id);
    if (!owner) return res.status(400).json({ error: "Invalid user" });

    let code;
    while (true) {
      code = genCode().slice(0, 6);
      const existing = await Group.findOne({ code });
      if (!existing) break;
    }

    const group = new Group({
      code,
      name,
      description,
      ownerId: owner._id,
      members: [owner._id]
    });
    await group.save();
    res.json({ success: true, group_id: group._id, group });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/groups/join", async (req, res) => {
  try {
    const { user_id, group_code } = req.body;
    if (!user_id || !group_code)
      return res.status(400).json({ error: "user_id and group_code required" });

    const user = await User.findById(user_id);
    const group = await Group.findOne({ code: group_code.trim().toUpperCase() });
    if (!group) return res.status(400).json({ error: "Invalid group code" });

    if (!group.members.includes(user._id)) {
      group.members.push(user._id);
      await group.save();
    }

    res.json({ success: true, group });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/users/:userId/groups", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const groups = await Group.find({ members: user._id });

    res.json({ groups });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/api/groups/:groupCode/detail", async (req, res) => {
  try {
    const code = req.params.groupCode.trim().toUpperCase();
    const group = await Group.findOne({ code }).populate("members");

    if (!group) return res.status(404).json({ error: "Group not found" });

    const notes = await Note.find({ groupId: group._id }).sort({ createdAt: -1 });
    const links = await Link.find({ groupId: group._id }).sort({ createdAt: -1 });

    res.json({ group, notes, links });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ---------- NOTES UPLOAD ROUTE ----------

app.post("/api/groups/:groupCode/notes/upload", upload.single("file"), async (req, res) => {
  try {
    const code = req.params.groupCode.trim().toUpperCase();
    const group = await Group.findOne({ code });
    if (!group) return res.status(404).json({ error: "Group not found" });

    const { title = "", details = "" } = req.body;
    if (!req.file) return res.status(400).json({ error: "File is required" });

    const fname = req.file.filename;
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${fname}`;

    const note = new Note({
      title,
      details,
      filename: fname,
      fileUrl,
      kind: "file",
      groupId: group._id
    });
    await note.save();

    res.json({ success: true, note });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- FETCH GROUP CHAT ----------
app.get("/api/groups/:groupCode/chat", async (req, res) => {
  try {
    const code = req.params.groupCode.trim().toUpperCase();
    const group = await Group.findOne({ code });
    if (!group) return res.status(404).json({ error: "Group not found" });

    const messages = await ChatMessage.find({ groupId: group._id }).sort({ createdAt: 1 });

    res.json({ chat: messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- POST GROUP CHAT ----------
app.post("/api/groups/:groupCode/chat", async (req, res) => {
  try {
    const code = req.params.groupCode.trim().toUpperCase();
    const group = await Group.findOne({ code });
    if (!group) return res.status(404).json({ error: "Group not found" });

    const { user_id, message } = req.body;
    if (!user_id || !message)
      return res.status(400).json({ error: "user_id and message are required" });

    const user = await User.findById(user_id);
    if (!user) return res.status(400).json({ error: "Invalid user" });

    const chatMessage = new ChatMessage({
      groupId: group._id,
      userId: user._id,
      username: user.username,
      message
    });

    await chatMessage.save();

    res.json({ success: true, message: chatMessage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- SERVER START ----------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
