# Fullstack User Management App

A fullstack application for managing user data with pagination and sorting functionality. Built using **React**, **Material UI**, **Express**, and **Node.js**, with RESTful API integration and responsive design.

---

## 📁 Project Structure

fullstack-user-app/
├── frontend/
│   ├── src/
│   │   └── components/
│   │       └── UserTable.jsx
│   └── package.json
├── backend/
│   ├── server.js
│   ├── controllers/
│   │   └── userController.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── package.json

yaml
Copy
Edit

---

## ⚙️ Tech Stack

### Frontend

- **React**
- **Axios** – for API calls
- **Material UI** – for UI components and styling
- **react-data-table-component** – for advanced data table features

### Backend

- **Express.js**
- **Node.js**
- **nodemon** – for hot-reloading during development

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or above)
- npm or yarn

---

### 🔧 Backend Setup

1. Navigate to the `backend` folder:

```bash
cd backend
Install dependencies:

npm install
Start the backend server:
The server will start on http://localhost:5000

🖥️ Frontend Setup
Navigate to the frontend folder:

cd frontend
Install dependencies:
npm install
Start the frontend development server:
npm start
The app will run on http://localhost:3000

📡 API Endpoints
Base URL: http://localhost:5000/api/users
GET / – Fetch all users (with pagination & sorting support)

POST / – Add a new user

PUT /:id – Update a user

DELETE /:id – Delete a user

🖼️ UI Features
Display user data in a paginated, sortable table

Modern Material UI layout

API integration with Axios

Responsive design for desktop and mobile views

🤝 Contributions
Feel free to fork the repo and submit PRs. For major changes, please open an issue first to discuss your ideas.

📃 License
This project is licensed under the MIT License.

---

Let me know if you'd like a version with usage screenshots, demo instructions, or deployment steps (e.g., using Vercel + Render or any other stack).