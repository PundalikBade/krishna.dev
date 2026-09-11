# DevFolio — MERN Stack Portfolio

A modern developer portfolio with motion graphics, built on the **MongoDB · Express · React · Node.js** stack.

## Features

- **Motion graphics** — Framer Motion scroll animations, animated hero text, particle background, custom cursor, 3D tilt cards, animated skill bars, floating logo, loader screen
- **MERN backend** — Contact form saves messages to MongoDB via Express API
- **Fully responsive** — mobile-first layout with animated hamburger menu
- **Dark neon theme** — gradients, glassmorphism, glow effects

## Project Structure

```
├── server/            # Express + MongoDB API
│   ├── models/        # Mongoose models (Contact)
│   ├── routes/        # API routes
│   └── server.js      # Entry point
├── client/            # React (Vite) frontend
│   └── src/
│       ├── components/  # All sections + effects
│       └── App.jsx
└── package.json       # Root scripts with concurrently
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB running locally, or a Mongo Atlas connection string

### 1. Install dependencies

```bash
npm run install-all
```

### 2. Configure the database

Set `MONGO_URI` in `server/.env`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/devfolio
```

### 3. Run both server & client

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

### Run separately

```bash
npm run server   # backend only
npm run client   # frontend only
```

## API Endpoints

| Method | Endpoint         | Description                    |
| ------ | ---------------- | ------------------------------ |
| POST   | `/api/contact`   | Save a contact message to Mongo |
| GET    | `/api/contact`   | List all messages               |
| GET    | `/api/health`    | Server health check             |

## Tech Stack

- **Frontend:** React, Vite, Framer Motion, React Icons, React Router
- **Backend:** Express, Mongoose, CORS, dotenv
- **Database:** MongoDB

## Customization

All portfolio content (projects, skills, about text, links) lives in the component files under `client/src/components/`. Update `data` arrays at the top of each component or replace inline content.