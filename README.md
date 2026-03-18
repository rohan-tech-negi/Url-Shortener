<div align="center">

# 🔗 LinkSnip — URL Shortener

**A full-stack URL shortener built for developers and creators.**  
Shorten links, manage them securely, and redirect with blazing speed.

![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v3-38B2AC?style=flat-square&logo=tailwindcss)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=flat-square&logo=postgresql)
![Drizzle ORM](https://img.shields.io/badge/ORM-Drizzle-C5F74F?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Database Schema](#-database-schema)
- [API Reference](#-api-reference)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Frontend Architecture](#-frontend-architecture)

---

## 🚀 Overview

LinkSnip is a full-stack URL shortener that allows authenticated users to:

- Generate short URLs from long ones (auto or custom short codes)
- Redirect via short code to the original URL
- Manage (view & delete) their own links
- Authenticate securely via JWT

The project is structured as a **monorepo** with a clear separation between the React frontend (`client/`) and the Express backend (`server/`).

---

## 📁 Project Structure

```
url-shortner/
│
├── client/                     # Frontend — React + Vite + Tailwind CSS
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx      # Sticky glass-effect navbar
│       │   ├── Hero.jsx        # Landing hero with shapes & headline
│       │   ├── CTASection.jsx  # URL shortener input + result
│       │   ├── Features.jsx    # 3 feature highlight cards
│       │   └── Footer.jsx      # Footer with links & socials
│       ├── App.jsx             # Root app + Lenis smooth scrolling
│       ├── main.jsx            # Vite entry point
│       └── index.css           # Global styles + Tailwind directives
│
└── server/                     # Backend — Express.js REST API
    ├── db/
    │   └── index.js            # Drizzle ORM + PostgreSQL connection
    ├── middlewares/
    │   └── auth.middleware.js  # JWT auth + ensureAuthenticated guard
    ├── models/
    │   ├── url.model.js        # `urls` table schema (Drizzle)
    │   ├── users.model.js      # `users` table schema (Drizzle)
    │   └── index.js            # Re-exports all models
    ├── routes/
    │   ├── url.routes.js       # URL shortening endpoints
    │   └── user.routes.js      # Auth endpoints (signup / login)
    ├── services/
    │   └── user.service.js     # DB query helpers for users
    ├── utils/
    │   ├── hash.js             # HMAC-SHA256 password hashing with salt
    │   ├── token.js            # JWT sign & verify helpers
    │   ├── token.validation.js # Zod schema for token payload
    │   └── request.validation.js # Zod schemas for request bodies
    ├── server.js               # Express app entry point
    ├── drizzle.config.js       # Drizzle Kit config for migrations
    ├── docker-compose.yml      # PostgreSQL local dev container
    └── .env                    # Environment variables (not committed)
```

---

## 🛠 Tech Stack

### Backend
| Layer | Technology |
|---|---|
| Runtime | Node.js (ESM modules) |
| Framework | Express.js v5 |
| Database | PostgreSQL (via Docker) |
| ORM | Drizzle ORM |
| Auth | JSON Web Tokens (JWT) |
| Validation | Zod |
| Short codes | nanoid |
| Password hashing | Node.js `crypto` — HMAC-SHA256 + random salt |

### Frontend
| Layer | Technology |
|---|---|
| Framework | React 18 (Vite) |
| Styling | Tailwind CSS v3 |
| Smooth scroll | Lenis |
| Fonts | Inter (Google Fonts) |

---

## ✨ Features

- 🔗 **Shorten URLs** — auto-generates a 6-character nanoid or accepts a custom short code
- ↩️ **Redirect** — `GET /:shortCode` resolves and redirects to the original URL instantly
- 👤 **User Auth** — full signup + login flow with salted password hashing and JWT sessions
- 🔒 **Protected Routes** — all link management endpoints require a valid `Bearer` token
- 📋 **List Links** — authenticated users can fetch all their shortened links
- 🗑️ **Delete Links** — remove any link you own
- ✅ **Input Validation** — every request body is validated with Zod before hitting the DB

---

## 🗄 Database Schema

### `users` table
| Column | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key, auto-generated |
| `first_name` | varchar(55) | Required |
| `last_name` | varchar(55) | Optional |
| `email` | varchar(255) | Unique, required |
| `password` | text | HMAC-SHA256 hashed |
| `salt` | text | Random 16-byte hex salt |
| `created_at` | timestamp | Auto-set |
| `updated_at` | timestamp | Auto-set |

### `urls` table
| Column | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key, auto-generated |
| `code` | varchar(155) | Short code, unique |
| `target_url` | text | The original long URL |
| `user_id` | UUID | FK → `users.id` |
| `created_at` | timestamp | Auto-set |
| `updated_at` | timestamp | Auto-set |

---

## 📡 API Reference

### Auth — `/user`

#### `POST /user/sign-up`
Register a new user.

**Request body:**
```json
{
  "firstname": "Rohan",
  "lastname": "Negi",
  "email": "rohan@example.com",
  "password": "secret123"
}
```
**Response `201`:**
```json
{ "userId": "uuid-here" }
```

---

#### `POST /user/login`
Login and receive a JWT token.

**Request body:**
```json
{
  "email": "rohan@example.com",
  "password": "secret123"
}
```
**Response `200`:**
```json
{ "token": "eyJhbGci..." }
```

---

### URLs — (Requires `Authorization: Bearer <token>`)

#### `POST /shorten`
Create a shortened URL.

**Request body:**
```json
{
  "url": "https://very-long-website.com/some/deep/path",
  "shortCode": "mylink"   // optional — auto-generated if omitted
}
```
**Response `201`:**
```json
{
  "id": "uuid",
  "shortCode": "mylink",
  "targetURL": "https://very-long-website.com/some/deep/path"
}
```

---

#### `GET /codes`
Fetch all links belonging to the authenticated user.

**Response `200`:**
```json
{
  "codes": [
    { "id": "...", "shortCode": "mylink", "targetURL": "...", "createdAt": "..." }
  ]
}
```

---

#### `GET /:shortCode` *(public)*
Redirect to the original URL.

```
GET /mylink  →  302 Redirect → https://very-long-website.com/...
```

---

#### `DELETE /:id`
Delete a link by its UUID (only the owner can delete).

**Response `200`:**
```json
{ "deleted": true }
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose (for PostgreSQL)

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd url-shortner
```

### 2. Start the database
```bash
cd server
docker-compose up -d
```

### 3. Configure environment variables
```bash
cp .env.example .env    # then fill in values (see below)
```

### 4. Run database migrations
```bash
cd server
npx drizzle-kit push
```

### 5. Start the backend
```bash
cd server
npm run dev
# → http://localhost:4000
```

### 6. Start the frontend
```bash
cd client
npm run dev
# → http://localhost:5173
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server/` folder:

```env
# PostgreSQL connection
DATABASE_URL=postgresql://postgres:password@localhost:5432/urlshortner

# JWT secret (use a long random string in production)
JWT_SECRET=your_super_secret_key_here

# Server port
PORT=4000
```

---

## 🎨 Frontend Architecture

The landing page (`client/`) is a single-page React app inspired by the **Beehiiv** design style.

### Design Highlights
- **Soft lavender background** (`#f0effe`) with a radial dot grid pattern
- **Massive bold headline** — uppercase Inter Black with a pink highlight strip on the keyword **"GROW"**
- **Floating SVG shapes** — pink star, blue star, and outlined hexagons with a CSS float animation
- **Concentric dashed circles** radiating behind the hero text
- **Glass-effect sticky navbar** — activates `backdrop-blur` on scroll
- **Interactive URL shortener** — live spinner, result display, and one-click copy
- **Lenis smooth scrolling** — exponential easing via RAF loop

### Key Files
| File | Purpose |
|---|---|
| `App.jsx` | Lenis initialization + layout assembly |
| `index.css` | Tailwind directives, custom CSS classes for shapes & glass effects |
| `Navbar.jsx` | Sticky navbar with animated hamburger menu for mobile |
| `Hero.jsx` | Full-viewport hero with all decorative elements |
| `CTASection.jsx` | URL input + shortener UI (hooks to backend) |
| `Features.jsx` | Three color-coded feature cards with hover lift |
| `Footer.jsx` | Four-column footer with social icon buttons |

---

<div align="center">
  Built with ❤️ · Powered by Express, Drizzle, and React
</div>
