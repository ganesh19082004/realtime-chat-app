<div align="center">

<h1>💬 Chatty</h1>

<p><strong>A production-grade, full-stack real-time chat application built with the MERN stack and Socket.IO</strong></p>

<p>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/></a>
  <a href="https://socket.io/"><img src="https://img.shields.io/badge/Socket.IO-4.x-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.IO"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License"/></a>
</p>

</div>

---

## 📌 About the Project

**Chatty** is a full-stack real-time messaging application that replicates the core experience of modern chat products. It was built to demonstrate end-to-end proficiency across the MERN stack — from designing RESTful APIs and WebSocket event flows to building a polished, responsive React frontend.

The application handles user authentication with JWTs, persists messages in MongoDB, delivers them instantly over Socket.IO, and stores media via Cloudinary — all within a single deployable Node.js service.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🔐 **JWT Authentication** | Secure signup/login with HTTP-only cookie sessions |
| 💬 **Real-time Messaging** | Bi-directional messaging powered by Socket.IO |
| 🟢 **Online Presence** | Live online/offline status tracking across all users |
| 🖼️ **Media Sharing** | Upload and send images via Cloudinary CDN |
| 👤 **Profile Management** | Update profile picture and personal details |
| 🎨 **32 Themes** | DaisyUI theme switcher with `localStorage` persistence |
| 🛡️ **Protected Routes** | Middleware-enforced access control on all private endpoints |
| 📱 **Responsive UI** | Mobile and desktop optimized layout with Tailwind CSS |
| ⚡ **Optimistic UX** | Loading skeletons, toast notifications, and smooth transitions |

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | HTTP server and REST API framework |
| **MongoDB + Mongoose** | NoSQL database and ODM |
| **Socket.IO** | WebSocket-based real-time communication |
| **JSON Web Tokens** | Stateless authentication |
| **bcryptjs** | Password hashing |
| **Cloudinary** | Cloud-based image storage and delivery |
| **cookie-parser** | Cookie handling middleware |
| **dotenv** | Environment variable management |

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | UI component library |
| **Vite** | Fast development build tool |
| **React Router DOM** | Client-side routing |
| **Zustand** | Lightweight global state management |
| **Axios** | HTTP client for REST API calls |
| **Socket.IO Client** | Real-time WebSocket integration |
| **Tailwind CSS** | Utility-first CSS framework |
| **DaisyUI** | Tailwind component library with theming |
| **Lucide React** | Icon library |
| **React Hot Toast** | Toast notification system |

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────┐
│                  CLIENT (React + Vite)                   │
│                                                          │
│   Zustand Stores ──► Axios (REST) ──► Express API        │
│   Zustand Stores ──► Socket.IO Client ──► Socket Server  │
│                                                          │
└──────────────────────────────────────────────────────────┘
                           │
                HTTP (REST) + WS (WebSocket)
                           │
┌──────────────────────────────────────────────────────────┐
│              SERVER (Node.js + Express)                  │
│                                                          │
│   Routes ──► Auth Middleware ──► Controllers             │
│   Socket.IO Server ──► Event Handlers                    │
│                                                          │
│   ┌─────────────────────────────────────────┐            │
│   │         MongoDB (Mongoose Models)       │            │
│   │  User Collection | Message Collection   │            │
│   └────────────────┬────────────────────────┘            │
└────────────────────┼─────────────────────────────────────┘
                     │
        ┌────────────┴─────────────┐
        │      MongoDB Atlas       │
        │    (Cloud Database)      │
        └────────────┬─────────────┘
                     │
        ┌────────────┴─────────────┐
        │     Cloudinary CDN       │
        │    (Image Storage)       │
        └──────────────────────────┘
```

> In production, Express serves the compiled React build from `frontend/dist/`, unifying frontend and backend into a single deployable service.

---

## 📁 Project Structure

```
fullstack-chat-app-master/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js       # Signup, login, logout, profile update
│   │   │   └── message.controller.js    # Send & fetch messages
│   │   ├── lib/
│   │   │   ├── cloudinary.js            # Cloudinary SDK config
│   │   │   ├── db.js                    # MongoDB connection
│   │   │   ├── socket.js                # Socket.IO server setup
│   │   │   └── utils.js                 # JWT generation helper
│   │   ├── middleware/
│   │   │   └── auth.middleware.js       # JWT verification middleware
│   │   ├── models/
│   │   │   ├── message.model.js         # Message schema
│   │   │   └── user.model.js            # User schema
│   │   ├── routes/
│   │   │   ├── auth.route.js            # Auth endpoints
│   │   │   └── message.route.js         # Messaging endpoints
│   │   ├── seeds/
│   │   │   └── user.seed.js             # Seed data for development
│   │   └── index.js                     # Application entry point
│   ├── .env                             # Environment variables (not committed)
│   └── package.json
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/                  # Reusable UI components
│       ├── constants/                   # App-wide constants (e.g., themes)
│       ├── lib/                         # Axios instance, utilities
│       ├── pages/                       # Route-level page components
│       ├── store/                       # Zustand state stores
│       ├── App.jsx                      # Root component with routing
│       ├── index.css                    # Global styles
│       └── main.jsx                     # React DOM entry point
├── package.json                         # Root scripts for build/deployment
├── LICENSE
└── README.md
```

---

## 📡 API Reference

### Authentication — `/api/auth`

| Method | Endpoint | Protected | Description |
|---|---|---|---|
| `POST` | `/api/auth/signup` | ❌ | Register a new user account |
| `POST` | `/api/auth/login` | ❌ | Authenticate and receive a JWT cookie |
| `POST` | `/api/auth/logout` | ❌ | Clear the session cookie |
| `GET` | `/api/auth/check` | ✅ | Validate the current session |
| `PUT` | `/api/auth/update-profile` | ✅ | Update profile picture |

### Messaging — `/api/messages`

| Method | Endpoint | Protected | Description |
|---|---|---|---|
| `GET` | `/api/messages/users` | ✅ | Fetch all users (excluding self) for sidebar |
| `GET` | `/api/messages/:id` | ✅ | Retrieve message history with a specific user |
| `POST` | `/api/messages/send/:id` | ✅ | Send a text or image message to a user |

> ✅ Protected routes require a valid JWT passed via HTTP-only cookie, enforced by `protectRoute` middleware.

---

## 🔌 WebSocket Events

| Event | Direction | Payload | Description |
|---|---|---|---|
| `connection` | Client → Server | `{ userId }` via query | User connects and registers their socket |
| `disconnect` | Client → Server | — | User disconnects, socket map is updated |
| `getOnlineUsers` | Server → All Clients | `string[]` (user IDs) | Broadcasts current list of online users |
| `newMessage` | Server → Receiver | `Message` object | Pushes a new message to the recipient in real time |

---

## 🎨 Theming

Chatty ships with **32 DaisyUI themes**. Users select a theme from the **Settings** page — the preference is persisted in `localStorage` and applied globally on load.

**Available themes:** `light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`, `black`, `luxury`, `dracula`, `cmyk`, `autumn`, `business`, `acid`, `lemonade`, `night`, `coffee`, `winter`, `dim`, `nord`, `sunset`

**Default:** `coffee`

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **MongoDB** — local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- **Cloudinary** account (for image upload functionality)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatty.git
cd chatty
```

### 2. Install Dependencies

```bash
npm install --prefix backend
npm install --prefix frontend
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/chat_db
JWT_SECRET=your_strong_secret_key_here
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> ⚠️ Never commit `.env` to version control. It is already listed in `.gitignore`.

### 4. Run the Application

**Start the backend** (runs on `http://localhost:5001`):

```bash
npm run dev --prefix backend
```

**Start the frontend** in a new terminal (runs on `http://localhost:5173`):

```bash
npm run dev --prefix frontend
```

Open **http://localhost:5173** in your browser.

---

## 📦 Production Build & Deployment

### Build

From the project root:

```bash
npm run build
```

This installs all dependencies and compiles the React frontend into `frontend/dist/`. Express then serves these static files in production.

### Start the Production Server

```bash
npm run start
```

### Deploy to Render / Railway / Fly.io

1. Set the **Build Command** to: `npm run build`
2. Set the **Start Command** to: `npm run start`
3. Add all environment variables listed above
4. Set `NODE_ENV=production`

**Recommended services:**
- **Database:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Media storage:** [Cloudinary](https://cloudinary.com)
- **Hosting:** [Render](https://render.com), [Railway](https://railway.app), or any Node.js-compatible platform
- **SSL/HTTPS:** Required for secure HTTP-only cookie transmission

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'feat: add your feature'`
4. **Push** to the branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with ❤️ using the **MERN Stack** · Node.js · React · MongoDB · Socket.IO

⭐ If you found this project useful, please consider giving it a star!

</div>
