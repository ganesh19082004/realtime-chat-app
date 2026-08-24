<div align="center">

# 💬 Chatty

Real-time messaging for modern teams and communities, built with a production-style MERN stack and Socket.IO.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## Overview

Chatty is a full-stack real-time chat application designed to mirror a production-ready messaging platform. It combines a secure backend API, persistent MongoDB storage, live socket-based messaging, and a responsive React frontend powered by Vite and Tailwind CSS.

The project includes user authentication, online presence tracking, media sharing, profile customization, and a polished multi-theme UI that supports a modern messaging experience.

---

## Key Features

- Secure authentication with JWT and cookie-based session handling
- Real-time messaging using Socket.IO
- Online/offline user presence indicators
- Image upload and sharing with Cloudinary
- Profile photo updates and user personalization
- Theme switching with DaisyUI and local persistence
- Responsive chat interface for desktop and mobile layouts
- Protected routes and middleware-based access control
- Clean state handling with Zustand

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.IO
- JWT (JSON Web Tokens)
- bcryptjs
- Cloudinary
- cookie-parser
- cors
- dotenv

### Frontend

- React 18
- Vite
- React Router DOM
- Zustand
- Axios
- Socket.IO Client
- Tailwind CSS
- DaisyUI
- Lucide React
- React Hot Toast

---

## Architecture

```text
Client (React + Vite)
        │
        ├── REST API calls via Axios
        │
        ├── Socket.IO client for real-time events
        │
        ▼
Express + Node.js API
        │
        ├── Auth routes and middleware
        ├── Message routes and controllers
        ├── Socket.IO server integration
        ▼
MongoDB (Mongoose models)
        │
        └── Cloudinary for media storage
```

This architecture keeps the frontend lightweight while ensuring chat communication, auth validation, and persistence remain fast and scalable for a single-service application.

---

## Project Structure

```text
fullstack-chat-app-master/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── lib/
│   │   │   ├── cloudinary.js
│   │   │   ├── db.js
│   │   │   ├── socket.js
│   │   │   └── utils.js
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   ├── models/
│   │   │   ├── message.model.js
│   │   │   └── user.model.js
│   │   ├── routes/
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   ├── seeds/
│   │   │   └── user.seed.js
│   │   └── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── package.json
├── LICENSE
├── README.md
└── BUILDING_GUIDE.txt
```

---

## Prerequisites

Before running the project locally, make sure you have:

- Node.js 18+
- npm 9+
- MongoDB instance or MongoDB Atlas cluster
- Cloudinary account for image uploads
- Git

---

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/your-username/chatty.git
cd chatty
```

### 2) Install dependencies

```bash
npm install --prefix backend
npm install --prefix frontend
```

### 3) Create environment variables

Create a `.env` file in the `backend` directory with the following values:

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/chat_db
JWT_SECRET=your_super_secret_key
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> Keep this file local and never commit it to source control.

### 4) Start the application

Run the backend:

```bash
npm run dev --prefix backend
```

Run the frontend in a second terminal:

```bash
npm run dev --prefix frontend
```

Then open the app in your browser at:

```text
http://localhost:5173
```

---

## Production Build

From the root directory:

```bash
npm run build
```

This installs the backend and frontend dependencies, then builds the frontend bundle for production.

To run the production server:

```bash
npm run start --prefix backend
```

---

## API Overview

### Authentication

- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/login` — Authenticate a user
- `POST /api/auth/logout` — Clear the auth cookie
- `GET /api/auth/check` — Validate the current session
- `PUT /api/auth/update-profile` — Update profile details or image

### Messaging

- `GET /api/messages/users` — List available chat users
- `GET /api/messages/:id` — Fetch message history with a specific user
- `POST /api/messages/send/:id` — Send a text or image message

These routes are protected by JWT middleware and are intended to support a real-time chat workflow with secure access control.

---

## Real-Time Behavior

The app uses Socket.IO for live interactions, including:

- user connection tracking
- online user updates
- new message delivery to connected clients
- event-driven updates without full page reloads

This makes the chat experience feel immediate and close to a production messaging product.

---

## UI and Experience

The frontend is designed around a clean conversation-first layout, with:

- sidebar-based contact list
- active chat panel with message history
- theme switching from the settings page
- responsive layout using Tailwind CSS
- toast feedback for user actions
- loading skeletons for smoother visual transitions

---

## Deployment Notes

For deployment, configure the same environment variables and set `NODE_ENV=production` in your hosting platform.

Recommended setup:

- MongoDB Atlas for persistence
- Cloudinary for image hosting
- Render, Railway, or any Node-compatible hosting provider
- HTTPS enabled for secure cookie transmission

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your work with a clear message
4. Push the branch and open a pull request

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

<div align="center">

Built with ❤️ using the MERN stack and real-time communication tools.

</div>


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
