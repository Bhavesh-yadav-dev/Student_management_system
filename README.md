# 🎓 Student Management System

A simple **Student Management System** built using **HTML, CSS, JavaScript, Node.js, and Express.js**. This project demonstrates a complete **CRUD (Create, Read, Update, Delete)** application with a basic frontend and RESTful backend API.

---

## 🚀 Features

- ➕ Add a new student
- 📋 View all students
- ✏️ Update existing student details
- 🗑️ Delete students
- 🔄 Real-time UI updates using the Fetch API
- 🌐 RESTful API built with Express.js
- 📱 Clean and responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

### Backend
- Node.js
- Express.js
- CORS

---

## 📌 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get a single student |
| POST | `/students` | Add a new student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

---

## 📂 Project Structure

```text
Student-Management-System/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Bhavesh-yadav-dev/Student_Management_System.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the backend server

```bash
node server.js
```

The backend runs at:

```text
http://localhost:8000
```

### 4️⃣ Open the frontend

Open `index.html` in your browser or use **Live Server** in VS Code.

---

## 🎯 Learning Objectives

This project helped practice:

- REST API development
- CRUD operations
- Express.js routing
- HTTP methods (GET, POST, PUT, DELETE)
- JSON request and response handling
- Fetch API
- Async/Await
- DOM manipulation
- Frontend & Backend integration

---

## ⚠️ Current Limitation

Student data is stored in **memory**, so all data is lost whenever the server restarts.

---

## 🔮 Future Improvements

- 🗄️ MongoDB integration
- 🔐 JWT Authentication
- 🔍 Search students
- 📄 Pagination
- ✅ Form validation
- 📱 Better responsive UI
- 📊 Sorting & Filtering
- 👤 Student profile images
- ☁️ Deploy frontend & backend

---

## 📜 License

This project is open-source and intended for learning and educational purposes.

⭐ If you found this project helpful, consider giving it a **star** on GitHub!
