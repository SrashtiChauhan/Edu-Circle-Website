
# Edu-Circle-Website

**Edu-Circle-Website** is a  web platform designed to facilitate collaborative learning among students and educators. It allows users to create groups, share notes, links, files, and communicate in real-time group chats.

---

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Setup](#Setup)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [API Endpoints](#api-endpoints)
* [Contributing](#contributing)
* [License](#License)


---

## Features

* **User Authentication:** Secure registration and login system.
* **Group Management:** Create, join, and manage learning groups.
* **Notes & Links Sharing:** Upload notes, links, and files for collaborative learning.
* **Real-Time Chat:** Group members can communicate instantly.
* **Member Management:** Group owners can remove members or delete groups.
* **Responsive Design:** Works on desktop and mobile devices.
* **Clean UI/UX:** Styled with Tailwind CSS for a modern look.

---

## Technologies Used

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **File Uploads:** Multer
* **Environment Management:** dotenv
* **API Communication:** Fetch API

---


2. **Backend Setup:**

```bash
cd backend
npm install
```

* Create a `.env` file:

```env
MONGO_URI=<Your MongoDB URI>
PORT=5000
FRONTEND_ORIGIN=http://localhost:5173
```

* Start the backend server:

```bash
npm run dev
```

3. **Frontend Setup:**

```bash
cd ../frontend
npm install
npm run dev
```

---

## Usage

* **Register/Login:** Create a new account or log in.
* **Create a Group:** Provide a group name and description.
* **Join a Group:** Enter a valid group code.
* **Upload Notes/Links:** Share study materials with your group.
* **Chat:** Communicate in real-time with group members.
* **Manage Members:** Owners can remove members or delete the group.

---

## Project Structure

**Edu-Circle-Website**

* **frontend/**

  * src/

    * components/
    * pages/
    * api.js
    * App.jsx
* **backend/**

  * models/
  * uploads/
  * server.js
* README.md
* package.json

---

## API Endpoints

### Authentication

* Register a new user
* Login user

### Groups

* Create a new group
* Join a group
* Get group details

### Notes & Links

* Upload a note/file
* Fetch chat messages
* Post a chat message

---


## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Create a Pull Request

---
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.






