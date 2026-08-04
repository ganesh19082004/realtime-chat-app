<![CDATA[<div align="center">

# 💬 Chatty — Fullstack Real-Time Chat Application

A modern, feature-rich real-time chat application built with the **MERN Stack** and **Socket.IO**. Chatty delivers instant messaging, online user tracking, image sharing, theme customization, and secure JWT-based authentication — all wrapped in a sleek, responsive UI.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Prerequisites](#️-prerequisites)
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
| 🛡️ **Route Protection** | Protected routes ensure only authenticated users access the app |

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework for REST API |
| **MongoDB + Mongoose** | NoSQL database & ODM |
| **Socket.IO** | Real-time bidirectional communication |
| **JSON Web Tokens (JWT)** | Stateless authentication |
| **bcrypt.js** | Password hashing |
| **Cloudinary** | Cloud-based image storage |
| **cookie-parser** | Parse HTTP cookies |
| **dotenv** | Environment variable management |
| **CORS** | Cross-Origin Resource Sharing |

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI library |
| **Vite** | Lightning-fast build tool & dev server |
| **React Router DOM v6** | Client-side routing & navigation |
| **Zustand** | Lightweight state management |
| **Socket.IO Client** | WebSocket client for real-time features |
| **Axios** | HTTP client for API requests |
| **Tailwind CSS** | Utility-first CSS framework |
| **DaisyUI** | Tailwind CSS component library with 32 themes |
| **Lucide React** | Beautiful & consistent icon library |
| **React Hot Toast** | Toast notification library |

---

## 📁 Project Structure

```
fullstack-chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js      # Signup, login, logout, profile update
│   │   │   └── message.controller.js   # Send messages, get conversations
│   │   ├── lib/
│   │   │   ├── cloudinary.js           # Cloudinary SDK configuration
│   │   │   ├── db.js                   # MongoDB connection setup
│   │   │   ├── socket.js              # Socket.IO server configuration
│   │   │   └── utils.js               # JWT token generation utility
│   │   ├── middleware/
│   │   │   └── auth.middleware.js      # JWT verification & route protection
│   │   ├── models/
│   │   │   ├── message.model.js        # Message schema (sender, receiver, text, image)
│   │   │   └── user.model.js           # User schema (email, name, password, profilePic)
│   │   ├── routes/
│   │   │   ├── auth.route.js           # Authentication routes
│   │   │   └── message.route.js        # Messaging routes
│   │   ├── seeds/
│   │   │   └── user.seed.js            # Database seed data
│   │   └── index.js                    # Express app entry point
│   ├── package.json
│   └── .env                            # Environment variables (not committed)
│
├── frontend/
│   ├── public/
│   │   └── avatar.png                  # Default user avatar
│   ├── src/
│   │   ├── components/
│   │   │   ├── AuthImagePattern.jsx    # Decorative pattern for auth pages
│   │   │   ├── ChatContainer.jsx       # Main chat message display area
│   │   │   ├── ChatHeader.jsx          # Selected user info header
│   │   │   ├── MessageInput.jsx        # Text & image message input form
│   │   │   ├── Navbar.jsx              # Top navigation bar
│   │   │   ├── NoChatSelected.jsx      # Placeholder when no chat is open
│   │   │   ├── Sidebar.jsx             # User contacts list with online filter
│   │   │   └── skeletons/              # Loading skeleton components
│   │   ├── constants/
│   │   │   └── index.js                # Theme list & app constants
│   │   ├── lib/
│   │   │   ├── axios.js                # Axios instance with base URL config
│   │   │   └── utils.js                # Date formatting utilities
│   │   ├── pages/
│   │   │   ├── HomePage.jsx            # Main chat interface (Sidebar + ChatContainer)
│   │   │   ├── LoginPage.jsx           # User login form
│   │   │   ├── SignUpPage.jsx          # User registration form
│   │   │   ├── ProfilePage.jsx         # User profile management
│   │   │   └── SettingsPage.jsx        # Theme selection settings
│   │   ├── store/
│   │   │   ├── useAuthStore.js         # Auth state, socket connection management
│   │   │   ├── useChatStore.js         # Chat state, messages, real-time subscriptions
│   │   │   └── useThemeStore.js        # Theme persistence with localStorage
│   │   ├── App.jsx                     # Root component with routes & auth checks
│   │   ├── main.jsx                    # React entry point with BrowserRouter
│   │   └── index.css                   # Global styles & Tailwind imports
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── package.json                         # Root scripts (build & start)
├── LICENSE
└── README.md
```

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9 or higher (comes with Node.js)
- **MongoDB Atlas** account — [Sign up free](https://www.mongodb.com/cloud/atlas)
- **Cloudinary** account — [Sign up free](https://cloudinary.com/) *(for image uploads)*
- **Git** — [Download](https://git-scm.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fullstack-chat-app.git
cd fullstack-chat-app
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend/` directory:

```bash
cp backend/.env.example backend/.env
```

Then fill in your credentials (see [Environment Variables](#-environment-variables) below).

### 4. Start Development Servers

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
```
> Backend runs on `http://localhost:5001` with nodemon hot-reload.

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
```
> Frontend runs on `http://localhost:5173` with Vite HMR.

### 5. Open the App

Navigate to **http://localhost:5173** in your browser. Create an account and start chatting! 🎉

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend/` directory with the following variables:

| Variable | Description | Example |
|---|---|---|
| `PORT` | Backend server port | `5001` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/chat_db` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `your-super-secret-key-here` |
| `NODE_ENV` | Environment mode | `development` |
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name | `dxxxxxxxxx` |
| `CLOUDINARY_API_KEY` | Your Cloudinary API key | `123456789012345` |
| `CLOUDINARY_API_SECRET` | Your Cloudinary API secret | `abcdefghijk-lmnopqrst` |

```env
PORT=5001
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/chat_db
JWT_SECRET=your-super-secret-key-here
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

For local development, use a local MongoDB URI like `mongodb://127.0.0.1:27017/chat_db`. If you prefer MongoDB Atlas, replace the placeholders in `MONGODB_URI` with your real Atlas username, password, and cluster hostname. If your password contains reserved URL characters such as `@`, `:`, `/`, or `#`, URL-encode it before pasting it into the connection string.

> ⚠️ **Important:** Never commit your `.env` file. It is already included in `.gitignore`.

---

## 📡 API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/auth/signup` | ❌ | Register a new user |
| `POST` | `/api/auth/login` | ❌ | Login with email & password |
| `POST` | `/api/auth/logout` | ❌ | Logout & clear JWT cookie |
| `PUT` | `/api/auth/update-profile` | ✅ | Update profile picture |
| `GET` | `/api/auth/check` | ✅ | Verify authentication status |

### Messaging (`/api/messages`)

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/messages/users` | ✅ | Get all users for sidebar (excludes self) |
| `GET` | `/api/messages/:id` | ✅ | Get message history with a specific user |
| `POST` | `/api/messages/send/:id` | ✅ | Send a text/image message to a user |

> ✅ = Requires JWT authentication via `protectRoute` middleware

---

## 🔌 WebSocket Events

| Event | Direction | Payload | Description |
|---|---|---|---|
| `connection` | Client → Server | `{ userId }` via handshake query | User connects to socket server |
| `disconnect` | Client → Server | — | User disconnects from socket server |
| `getOnlineUsers` | Server → All Clients | `string[]` (user IDs) | Broadcasts updated list of online users |
| `newMessage` | Server → Specific Client | `Message` object | Delivers a new message to the receiver |

---

## 🎨 Theming

Chatty supports **32 DaisyUI themes** with live preview. Users can switch themes from the **Settings** page, and the selection persists in `localStorage`.

Available themes include: `light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`, `black`, `luxury`, `dracula`, `cmyk`, `autumn`, `business`, `acid`, `lemonade`, `night`, `coffee`, `winter`, `dim`, `nord`, `sunset`.

Default theme: **`coffee`**

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT (React)                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  │
│  │  Zustand  │  │  Axios   │  │ Socket.IO│  │ React      │  │
│  │  Stores   │  │  Client  │  │  Client  │  │ Router DOM │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────────────┘  │
│       │              │             │                         │
└───────┼──────────────┼─────────────┼─────────────────────────┘
        │   REST API   │  WebSocket  │
        │   (HTTP)     │  (WS)       │
┌───────┼──────────────┼─────────────┼─────────────────────────┐
│       │              │             │                         │
│  ┌────▼─────┐  ┌─────▼────┐  ┌────▼─────┐                  │
│  │ Express  │  │  Routes  │  │ Socket.IO│                  │
│  │ Server   │  │  + Auth  │  │  Server  │                  │
│  │          │  │ Middleware│  │          │                  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘                  │
│       │              │             │                         │
│  ┌────▼──────────────▼─────────────▼─────┐                  │
│  │           Controllers                  │                  │
│  │  (auth.controller + message.controller)│                  │
│  └────────────────┬──────────────────────┘                  │
│                   │                                          │
│  ┌────────────────▼──────────────────────┐                  │
│  │      MongoDB (Mongoose Models)         │                  │
│  │   User Collection  |  Message Collection│                 │
│  └────────────────┬──────────────────────┘                  │
│                   │                                          │
│              SERVER (Node.js + Express)                      │
└───────────────────┼──────────────────────────────────────────┘
                    │
        ┌───────────▼───────────┐
        │   MongoDB Atlas       │
        │   (Cloud Database)    │
        └───────────┬───────────┘
                    │
        ┌───────────▼───────────┐
        │    Cloudinary CDN     │
        │   (Image Storage)     │
        └───────────────────────┘
```

---

## 📦 Deployment

### Production Build

```bash
# From the root directory — installs all deps & builds frontend
npm run build
```

### Start Production Server

```bash
# Serves both API and built frontend from Express
npm run start
```

> In production mode, Express serves the React build from `frontend/dist/` and handles all API routes.

### Deploy to Render / Railway / Heroku

1. Set the **Build Command** to: `npm run build`
2. Set the **Start Command** to: `npm run start`
3. Add all environment variables from the [Environment Variables](#-environment-variables) section
4. Set `NODE_ENV=production`

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ using the MERN Stack**

⭐ Star this repo if you found it helpful!

</div>
]]>
