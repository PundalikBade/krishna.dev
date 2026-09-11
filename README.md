# Krishna — MERN Stack Portfolio

A retro pixel-art portfolio built with **MongoDB · Express · React · Node.js** and **Tailwind CSS**, showcasing my learning journey as a first-year BS student at IIT Madras.

## Features

- **Retro pixel-art identity** — Press Start 2P typography, thick borders, offset shadows, playful SVG illustrations
- **Tailwind CSS v4** — consistent design system via `@theme` tokens, minimal custom CSS
- **MERN backend** — Projects CRUD API + contact form saved to MongoDB
- **Framer Motion** — subtle scroll reveals, navbar entrance, loader animation
- **Honest content** — no fake experience, no invented projects; work-in-progress cards reflect real status
- **Responsive** — mobile hamburger menu, fluid grids, adjusted typography

## Project Structure

```
├── server/                     # Express + MongoDB API
│   ├── config/db.js            # Mongoose connection
│   ├── controllers/            # Business logic
│   │   ├── projectController.js
│   │   └── contactController.js
│   ├── models/                 # Mongoose schemas
│   │   ├── Project.js
│   │   └── Message.js
│   ├── routes/                 # API routes
│   │   ├── projectRoutes.js
│   │   └── contactRoutes.js
│   ├── middleware/              # Error handling
│   │   ├── asyncHandler.js
│   │   └── errorHandler.js
│   ├── .env.example
│   ├── .env                    # your secrets (gitignored)
│   └── server.js               # Entry point
│
├── client/                     # React (Vite) + Tailwind CSS
│   └── src/
│       ├── components/
│       │   ├── ui/             # Reusable design-system components
│       │   │   ├── SectionHeading.jsx
│       │   │   ├── PixelButton.jsx
│       │   │   └── StatusBadge.jsx
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Learning.jsx
│       │   ├── Projects.jsx
│       │   ├── Contact.jsx
│       │   ├── Footer.jsx
│       │   └── ScrollProgress.jsx
│       ├── services/
│       │   └── api.js          # REST client (fetch-based)
│       ├── index.css           # Tailwind @theme + pixel design system
│       ├── App.jsx
│       └── main.jsx
│   ├── vite.config.js          # React + Tailwind v4 plugin
│   └── package.json
│
└── package.json                # Root scripts (concurrently)
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB running locally, or a MongoDB Atlas connection string

### 1. Install dependencies

```bash
npm run install-all
```

### 2. Configure environment

Copy `.env.example` to `.env` and set your MongoDB connection string:

```bash
# server/.env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/krishna_portfolio
CLIENT_URL=http://localhost:5173
```

For MongoDB Atlas, replace `MONGO_URI` with your cluster connection string.

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

### Projects

| Method | Endpoint              | Description                         |
| ------ | --------------------- | ----------------------------------- |
| GET    | `/api/projects`       | List all projects (?status=, ?featured=true) |
| GET    | `/api/projects/:id`   | Get a single project                |
| POST   | `/api/projects`       | Create a project                    |
| PUT    | `/api/projects/:id`   | Update a project                    |
| DELETE | `/api/projects/:id`   | Delete a project                    |

### Contact

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| POST   | `/api/contact`   | Send a contact message        |

### Health

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | `/api/health` | Server health check |

## Tech Stack

| Layer      | Technologies                                    |
| ---------- | ----------------------------------------------- |
| Frontend   | React 18, Vite, Tailwind CSS v4, Framer Motion, React Icons |
| Backend    | Node.js, Express, Mongoose, CORS, dotenv        |
| Database   | MongoDB                                         |
| Styling    | Tailwind CSS `@theme` tokens, Press Start 2P, VT323, Space Grotesk |

## Design System

The Tailwind theme is defined in `client/src/index.css` using `@theme`:

- **Colors**: `navy`, `paper`, `royal`, `orange`, `pink`, `cyan`, `yellow`, `purple`
- **Fonts**: `pixel` (Press Start 2P), `vt` (VT323), `body` (Space Grotesk)
- **Shadows**: `retro`, `retro-sm`, `retro-lg`
- **Animations**: `float`, `float-slow`, `spin-slow`, `heartbeat`, `marquee`, `arrow-bounce`
- **Components**: `pixel-kicker`, `pixel-title`, `pixel-card`, `pixel-card-dark`, `pixel-btn`, `pixel-status`, `pixel-icon-box`, `pixel-stamp`

## Customization

### Adding real projects

1. Use the API: `POST /api/projects` with title, description, technologies, status, etc.
2. The Projects section automatically fetches from the API — when projects exist in MongoDB, they display; when the DB is empty, the 3 honest WIP cards show instead.

### Updating content

All portfolio text lives in component files under `client/src/components/`. Edit the data arrays or inline content directly.

## License

MIT