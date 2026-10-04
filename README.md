# Bhuvaneshwari R — Engineering & AI/ML Portfolio

A production-quality personal portfolio website communicating the engineering journey:
**AI/ML → Engineering → Real-world Problems → Intelligent Systems**

Built with a dark-first, futuristic, technical, and recruiter-friendly design.

---

## 🏗️ Architecture & Tech Stack

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NeuralBackground.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── ResumePlaceholderModal.jsx
│   │   │   └── SystemProgression.jsx
│   │   ├── data/
│   │   │   ├── achievementsData.js
│   │   │   ├── experienceData.js
│   │   │   ├── projectsData.js
│   │   │   └── skillsData.js
│   │   ├── sections/
│   │   │   ├── About.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   │   ├── assets/
│   │   │   └── README.md
│   │   └── favicon.svg
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── controllers/
│   │   └── contactController.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── .env.example
└── README.md
```

### Frontend
- **React 18** + **Vite 5** (Fast HMR and tree-shaken builds)
- **Tailwind CSS 3** (Custom futuristic dark theme: near-black `#070A11`, crystal teal `#00F2FE`, cyan `#06B6D4`)
- **Framer Motion 11** (Silky entrance reveals, interactive modals, responsive drawers, `prefers-reduced-motion` compliance)
- **Lucide React** (Crisp vector technical iconography)
- **Custom Canvas Engine** (Subtle, low-overhead neural graph streams)

### Backend
- **Node.js** + **Express.js**
- **CORS**, **dotenv**
- Strict payload sanitization & field validation
- High-security error handling (zero leaked secrets or stack traces)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+ or v24+ recommended)
- npm (v9+)

### 2. Backend Setup & Run

```bash
cd backend

# Install dependencies (if not already installed)
npm install

# (Optional) Create local .env from example
cp .env.example .env

# Run in production mode
npm start

# Or run with nodemon in development mode
npm run dev
```
*Backend runs on `http://localhost:5000` with health check at `http://localhost:5000/api/health`.*

### 3. Frontend Setup & Run

```bash
cd frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
*Frontend runs on `http://localhost:5173` with automated proxying for `/api` calls to the Express backend.*

### 4. Build for Production

```bash
cd frontend
npm run build
```
*Outputs an optimized, compressed production bundle in `frontend/dist/`.*

---

## 📄 Customizing Real Assets

The portfolio includes graceful fallback modals and placeholders so nothing ever breaks out of the box. To plug in your real documents:

### 1. Real Resume PDF
- Drop your PDF at:
  ```
  portfolio/frontend/public/assets/Bhuvaneshwari_Resume.pdf
  ```
- Once present, both the **Download Resume** buttons in the navbar and hero will immediately download your file. If absent, clicking opens the digital profile summary modal.

### 2. Certificates & Awards
- Place scans or PDF credentials in:
  ```
  portfolio/frontend/public/assets/certificates/
  ```
- Supported files:
  - `internshala-top-performer.pdf`
  - `chancellor-scholarship.pdf`
  - `matlab-certification.pdf`
  - `technical-community-certs.pdf`

### 3. Adding New Projects
- Open `frontend/src/data/projectsData.js`
- Add an object to `featuredProjects` or `otherProjects` with:
  - `title`, `subtitle`, `category`, `categories` (for filters)
  - `problem`, `solution`, `tags`
  - `github`, `liveDemo` links
  - `metrics` (e.g., accuracy, R², RMSE)
  - `truthfulness` notes (distinguishing implemented software vs. future roadmap)

---

## 🌐 Production Deployment

### Option A: Full-Stack on Render / Railway
1. **Frontend**: Deploy `frontend` as a Static Site with build command `npm run build` and publish directory `dist`.
2. **Backend**: Deploy `backend` as a Web Service with start command `npm start`.
3. Set environment variable on frontend:
   `VITE_API_URL=https://<your-backend-service>.onrender.com/api`

### Option B: Frontend on Vercel / Netlify + Backend on Render
1. Push the repository to GitHub.
2. Link the `frontend` folder to Vercel or Netlify.
3. Link the `backend` folder to Render or Railway.
4. Set CORS `CLIENT_URL` in backend `.env` to your frontend production domain.

---

## 🛡️ Truthfulness & Scientific Integrity

- **KineticTwin (SmartFootAI)**: Highlighted as a functional software digital-twin prototype with mathematical kinetic simulation (0.5 Joules/step model). The **90.87%** validation performance metric is clearly documented as crowd-density prototype forecasting, not image classification. Physical piezoelectric hardware is clearly designated as a proposed future expansion.
- **RapidMed**: Documented as an ongoing prototype trauma coordination grid. Features an ABDM-oriented architectural Smart Health Locker (not yet formal government certification), normal OTP vs. break-glass emergency audit logging, and OSRM routing. **Ant Colony Optimization (ACO)** is explicitly cataloged as a planned future research enhancement.
