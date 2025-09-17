// models.js
const mongoose = require("mongoose");

const MembershipSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: String
});

const NoteSchema = new mongoose.Schema({
  title: String,
  details: String,
  filename: String,   // stored file name in uploads/
  fileUrl: String,    // optional full URL
  kind: { type: String, enum: ["file", "link"], default: "file" },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  createdAt: { type: Date, default: Date.now }
});

const LinkSchema = new mongoose.Schema({
  url: String,
  title: String,
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  createdAt: { type: Date, default: Date.now }
});

const ChatMessageSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  username: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const GroupSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true }, // 6-char code
  name: String,
  description: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);
const Group = mongoose.model("Group", GroupSchema);
const Note = mongoose.model("Note", NoteSchema);
const Link = mongoose.model("Link", LinkSchema);
const ChatMessage = mongoose.model("ChatMessage", ChatMessageSchema);

module.exports = {
  User,
  Group,
  Note,
  Link,
  ChatMessage
};