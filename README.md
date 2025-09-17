Perfect 👍 Since your project uses **ReactJS** for frontend and **MongoDB** for backend database, I’ll update the README so it reflects **full-stack development** instead of just frontend.

Here’s the improved **README.md** 👇

---

```markdown
# 🎓 Edu-Circle Website

**Edu-Circle** is a full-stack educational platform where students and educators can collaborate, share knowledge, and manage study resources.  
It is built with **ReactJS (frontend)** and **MongoDB (backend database)**, bundled with **Vite** for fast development, and deployed on **GitHub Pages** (frontend) & a server (backend).

---

## ✨ Features

- 🔑 User Authentication (Login/Register with MongoDB)  
- 📝 Notes sharing & group management  
- 💬 Real-time group chat for discussions  
- 🎨 Dark/Light mode toggle  
- 📱 Fully responsive design (mobile + desktop)  
- ⚡ Optimized build using Vite  

---

## 🛠️ Tools & Technologies Used

### 🔹 Frontend
- **ReactJS** – UI components & state management  
- **Vite** – Fast bundler & dev server  
- **TailwindCSS** – Modern styling & responsiveness  
- **React Router DOM** – Routing between pages  

### 🔹 Backend
- **Node.js + Express.js** – REST API & server logic  
- **MongoDB** – Database for users, notes, groups  
- **Mongoose** – ODM for MongoDB  

### 🔹 Deployment
- **GitHub Pages** – Hosting frontend  
- **Render / Railway / Vercel / Heroku (optional)** – Hosting backend  

---

## 💻 Programming Languages

- **JavaScript (ES6+)** – Application logic  
- **JSX** – Component-based UI in React  
- **CSS3 (TailwindCSS)** – Styling  
- **MongoDB Query Language** – Database queries  

---

## 📂 Project Structure

```

Edu-Circle-Website/
├── frontend/              # React + Vite code
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Login, Groups, Notes etc.
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── backend/               # Node.js + Express + MongoDB code
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes (auth, notes, groups)
│   ├── server.js          # Main backend entry
│   └── package.json
│
└── README.md

````

---

## 🚀 How to Run Locally

### 🔹 Frontend
```bash
cd frontend
npm install
npm run dev
````

### 🔹 Backend

```bash
cd backend
npm install
npm start
```

Make sure to create a `.env` file in `backend/` with:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🌟 Future Enhancements

* 📚 Subject-wise resource sharing
* 🎥 Integration of recorded/live video lectures
* 🔔 Notifications & reminders
* 📊 Analytics dashboard for teachers
* 🤝 Collaborative tools (quizzes, polls, assignments)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👩‍💻 Author

Developed with  by **Srashti Chauhan**
👉 [GitHub Profile](https://github.com/SrashtiChauhan)

```

---

