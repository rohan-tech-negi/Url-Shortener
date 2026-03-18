# URL Shortener

A full-stack URL shortener with a React frontend and Express backend.

## Project Structure

```
url shortner/
├── client/         # React + Vite + Tailwind CSS (Frontend)
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── CTASection.jsx
│       │   ├── Features.jsx
│       │   └── Footer.jsx
│       └── App.jsx
│
└── server/         # Express + Drizzle ORM (Backend)
    ├── db/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── services/
    ├── utils/
    ├── server.js
    └── .env
```

## Running the Project

### Frontend
```bash
cd client
npm run dev
# → http://localhost:5173
```

### Backend
```bash
cd server
npm run dev
# → http://localhost:4000
```
