# 💖 Valentine Proposal Generator

A fun, interactive web app that lets you create a personalized Valentine’s proposal link and share it with someone special.

Built using the **MERN stack**, this project combines playful UI/UX, animations, and real-time interactions to create a memorable experience.

---

## 🚀 Live Demo

🌐 Frontend: https://valentine-proposal-project-amber.vercel.app
🔗 Backend: https://valentine-proposal-project.onrender.com

---

## ✨ Features

* 💌 Generate a personalized proposal link
* 🔗 Shareable URL for your partner
* 😈 Interactive “No” button (runs away on desktop)
* 📱 Mobile-friendly behavior with GIF reactions
* 🎥 Dynamic GIF animations
* 💕 Floating hearts animation on acceptance
* 🎵 Sound effects on "Yes" click
* 📊 Tracks acceptance in database
* 💬 WhatsApp share integration
* 🔗 Copy-to-clipboard with feedback

---

## 🧠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## ⚙️ How It Works

1. User enters name & gender
2. Backend creates a unique user entry
3. A shareable link is generated
4. Receiver opens the link
5. Interactive proposal page appears
6. If accepted → database updates + animations trigger

---

## 📁 Project Structure

```
root/
│
├── valentine-frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── api/
│
├── valentine-backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
```

---

## 🛠️ Installation & Setup

### 1. Clone the repo

```
git clone https://github.com/Priyanshupandey77/Valentine_Proposal_Project.git
cd Valentine_Proposal_Project
```

---

### 2. Backend Setup

```
cd valentine-backend
npm install
```

Create `.env`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run server:

```
npm run dev
```

---

### 3. Frontend Setup

```
cd valentine-frontend
npm install
npm run dev
```

---

## 🌍 Environment Variables

Frontend:

```
VITE_API_URL=https://your-backend-url/api/users
```

Backend:

```
MONGO_URI=your_mongodb_url
PORT=5000
```

---

## ⚠️ Known Notes

* Render free tier may sleep after inactivity (first request may be slow)
* Ensure CORS is enabled in backend for production
* Use `vercel.json` rewrite to fix React Router 404 issues

---

## 🔥 Future Improvements

* 💬 Real-time notification when proposal is accepted
* 📊 Dashboard for tracking interactions
* 🔐 User authentication
* 🌐 Custom domain support
* 🎁 Custom message editor

---

## 🙌 Acknowledgements

Inspired by creative interactive proposal experiences and built as a learning + portfolio project.

---

## 📬 Contact

If you like this project or want to collaborate:

* GitHub: https://github.com/YOUR_USERNAME
* LinkedIn: (add your profile)

---

## ⭐ Support

If you found this useful, consider giving it a ⭐ on GitHub!

---
