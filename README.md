<div align="center">
  <h1>💬 Chatty — Fullstack Real-Time Chat Application</h1>
  <p>A modern, feature-rich real-time chat application built with the <b>MERN Stack</b> and <b>Socket.IO</b>.<br/>Chatty delivers instant messaging, online user tracking, image sharing, theme customization, and secure JWT-based authentication — all wrapped in a sleek, responsive UI.</p>
  <br/>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/></a>
  <a href="https://socket.io/"><img src="https://img.shields.io/badge/Socket.IO-4.x-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.IO"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License: MIT"/></a>
</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Prerequisites](#-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [🔑 Environment Variables](#-environment-variables)
- [📡 API Endpoints](#-api-endpoints)
- [🔌 WebSocket Events](#-websocket-events)
- [🎨 Theming](#-theming)
- [🏗️ Architecture Overview](#️-architecture-overview)
- [📦 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure signup, login & logout with JWT tokens stored in HTTP-only cookies |
| 💬 **Real-Time Messaging** | Instant message delivery powered by Socket.IO WebSockets |
| 🟢 **Online Status** | Live tracking of online/offline users with green indicator dots |
| 🖼️ **Image Sharing** | Send images in chat — uploaded and hosted via Cloudinary CDN |
| 👤 **Profile Management** | Update profile picture with Cloudinary integration |
| 🎨 **32 Themes** | Choose from 32 beautiful DaisyUI themes with live preview |
| 📱 **Responsive Design** | Fully responsive layout — works on desktop, tablet & mobile |
| 🔔 **Toast Notifications** | User-friendly success/error notifications via React Hot Toast |
| ⚡ **Auto-Scroll** | Chat window automatically scrolls to the latest message |
| 🛡️ **Route Protection** | Protected routes redirect unauthenticated users to the login page |

---

## 🛠️ Tech Stack

### Backend

| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | 18+ | JavaScript runtime environment |
| **Express.js** | 4.x | REST API and HTTP server framework |
| **MongoDB** | Atlas | NoSQL cloud database |
| **Mongoose** | 8.x | MongoDB object modeling (ODM) |
| **Socket.IO** | 4.x | Real-time bidirectional WebSocket communication |
| **JSON Web Tokens** | 9.x | Stateless user authentication |
| **bcryptjs** | 2.x | Password hashing and comparison |
| **Cloudinary** | 2.x | Cloud image storage and CDN delivery |
| **cookie-parser** | 1.x | HTTP cookie parsing middleware |
| **dotenv** | 16.x | Environment variable management |

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.x | UI component library |
| **Vite** | 5.x | Fast development server and build tool |
| **React Router DOM** | 6.x | Client-side routing and navigation |
| **Zustand** | 5.x | Minimal global state management |
| **Axios** | 1.x | HTTP client for REST API requests |
| **Socket.IO Client** | 4.x | Real-time WebSocket client |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **DaisyUI** | 4.x | Tailwind CSS component library with themes |
| **Lucide React** | 0.4x | Lightweight SVG icon library |
| **React Hot Toast** | 2.x | Notification/toast system |

---

## 📁 Project Structure

```
fullstack-chat-app-master/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js       # Signup, login, logout, profile update
│   │   │   └── message.controller.js    # Send message & fetch message history
│   │   ├── lib/
│   │   │   ├── cloudinary.js            # Cloudinary SDK initialization
│   │   │   ├── db.js                    # MongoDB connection setup
│   │   │   ├── socket.js                # Socket.IO server & online user tracking
│   │   │   └── utils.js                 # JWT token generation utility
│   │   ├── middleware/
│   │   │   └── auth.middleware.js       # JWT verification & route protection
│   │   ├── models/
│   │   │   ├── message.model.js         # Mongoose Message schema
│   │   │   └── user.model.js            # Mongoose User schema
│   │   ├── routes/
│   │   │   ├── auth.route.js            # Authentication route definitions
│   │   │   └── message.route.js         # Messaging route definitions
│   │   ├── seeds/
│   │   │   └── user.seed.js             # Database seed script for dev/testing
│   │   └── index.js                     # Application entry point
│   ├── .env                             # Environment variables (git-ignored)
│   └── package.json
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/                  # Shared/reusable UI components
│       ├── constants/                   # App-wide constants (themes list, etc.)
│       ├── lib/                         # Axios instance & helper utilities
│       ├── pages/                       # Full-page route components
│       ├── store/                       # Zustand global state stores
│       ├── App.jsx                      # Root component with route definitions
│       ├── index.css                    # Global CSS and Tailwind directives
│       └── main.jsx                     # React DOM render entry point
├── package.json                         # Root-level scripts for build & deployment
├── LICENSE
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have the following installed before running the project:

- [Node.js](https://nodejs.org/) **v18 or higher**
- [npm](https://www.npmjs.com/) **v9 or higher**
- A **MongoDB** instance — local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- A **Cloudinary** account — [Sign up free](https://cloudinary.com/users/register/free)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatty.git
cd chatty
```

### 2. Install Dependencies

```bash
# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

### 3. Configure Environment Variables

See the [Environment Variables](#-environment-variables) section below.

### 4. Start in Development Mode

Open **two terminals** and run:

```bash
# Terminal 1 — Backend  (http://localhost:5001)
npm run dev --prefix backend
```

```bash
# Terminal 2 — Frontend  (http://localhost:5173)
npm run dev --prefix frontend
```

Open **http://localhost:5173** in your browser.

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
# Server
PORT=5001
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/chatty

# Authentication
JWT_SECRET=your_strong_random_secret_key_here

# Cloudinary  (https://cloudinary.com/console)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ **Important:** Never commit your `.env` file. It is already included in `.gitignore`.

---

## 📡 API Endpoints

### Authentication — `/api/auth`

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| `POST` | `/api/auth/signup` | ❌ | Register a new user account |
| `POST` | `/api/auth/login` | ❌ | Login and receive an HTTP-only JWT cookie |
| `POST` | `/api/auth/logout` | ❌ | Logout and clear the session cookie |
| `GET` | `/api/auth/check` | ✅ | Verify current authentication status |
| `PUT` | `/api/auth/update-profile` | ✅ | Upload and update profile picture |

### Messaging — `/api/messages`

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| `GET` | `/api/messages/users` | ✅ | Get all users for the sidebar (excludes self) |
| `GET` | `/api/messages/:id` | ✅ | Fetch full message history with a specific user |
| `POST` | `/api/messages/send/:id` | ✅ | Send a text or image message to a user |

> ✅ = Requires valid JWT via HTTP-only cookie, enforced by `protectRoute` middleware.

---

## 🔌 WebSocket Events

| Event | Direction | Payload | Description |
|---|---|---|---|
| `connection` | Client → Server | `{ userId }` via query string | Registers user socket on connection |
| `disconnect` | Client → Server | — | Removes user from online map on disconnect |
| `getOnlineUsers` | Server → All Clients | `string[]` (array of user IDs) | Broadcasts updated list of online users |
| `newMessage` | Server → Receiver | Full `Message` object | Delivers new message to recipient in real time |

---

## 🎨 Theming

Chatty supports **32 DaisyUI themes**, selectable from the **Settings** page. The chosen theme is saved to `localStorage` and persists across sessions.

<details>
<summary>View all available themes</summary>

`light` · `dark` · `cupcake` · `bumblebee` · `emerald` · `corporate` · `synthwave` · `retro` · `cyberpunk` · `valentine` · `halloween` · `garden` · `forest` · `aqua` · `lofi` · `pastel` · `fantasy` · `wireframe` · `black` · `luxury` · `dracula` · `cmyk` · `autumn` · `business` · `acid` · `lemonade` · `night` · `coffee` · `winter` · `dim` · `nord` · `sunset`

</details>

**Default theme:** `coffee`

---

## 🏗️ Architecture Overview

```
┌───────────────────────────────────────────────────┐
│              CLIENT  (React + Vite)               │
│                                                   │
│  ┌──────────┐   ┌──────────┐   ┌───────────────┐  │
│  │ Zustand  │   │  Axios   │   │  Socket.IO    │  │
│  │  Store   │   │  Client  │   │    Client     │  │
│  └────┬─────┘   └────┬─────┘   └──────┬────────┘  │
└───────┼──────────────┼────────────────┼────────────┘
        │   HTTP REST  │    WebSocket   │
        ▼              ▼                ▼
┌───────────────────────────────────────────────────┐
│             SERVER  (Node.js + Express)           │
│                                                   │
│  ┌─────────────────────┐   ┌────────────────────┐  │
│  │  Express REST API   │   │  Socket.IO Server  │  │
│  │  Routes + Middleware│   │  (Online Tracking) │  │
│  └──────────┬──────────┘   └─────────┬──────────┘  │
│             └──────────┬─────────────┘             │
│                        ▼                           │
│           ┌────────────────────────┐               │
│           │   Controllers Layer    │               │
│           │  auth · message        │               │
│           └────────────┬───────────┘               │
│                        ▼                           │
│           ┌────────────────────────┐               │
│           │  Mongoose ODM Models   │               │
│           │   User | Message       │               │
│           └────────────┬───────────┘               │
└────────────────────────┼──────────────────────────┘
                         ▼
           ┌─────────────────────────┐
           │      MongoDB Atlas      │
           │     (Cloud Database)    │
           └─────────────┬───────────┘
                         │
           ┌─────────────▼───────────┐
           │     Cloudinary CDN      │
           │  (Image Upload/Storage) │
           └─────────────────────────┘
```

> In production, Express statically serves the React build from `frontend/dist/`, consolidating the entire app into a single Node.js process.

---

## 📦 Deployment

### Build for Production

From the project root:

```bash
npm run build
```

Installs all dependencies and compiles the React frontend into `frontend/dist/`.

### Start Production Server

```bash
npm run start
```

Express serves both the API and the compiled React frontend from a single port.

### Deploy to Render / Railway / Fly.io

| Setting | Value |
|---|---|
| **Build Command** | `npm run build` |
| **Start Command** | `npm run start` |
| **NODE_ENV** | `production` |
| **Environment Vars** | Add all keys from [Environment Variables](#-environment-variables) |

**Recommended cloud services:**

| Purpose | Provider |
|---|---|
| Database | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) |
| Image Storage | [Cloudinary](https://cloudinary.com) |
| App Hosting | [Render](https://render.com) · [Railway](https://railway.app) · [Fly.io](https://fly.io) |

> 🔒 Enable HTTPS on your hosting platform to ensure HTTP-only cookies are transmitted securely.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "feat: add amazing feature"
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <b>Built with ❤️ using the MERN Stack</b>
  <br/><br/>
  ⭐ Star this repo if you found it helpful!
</div>

