import { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

function Proposal({ name, onAccept }) {
  const [noCount, setNoCount] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  //Move randomly
  const moveRandom = () => {
    const newX = Math.random() * 300 - 150;
    const newY = Math.random() * 300 - 150;

    animate(x, newX, { type: "spring", stiffness: 300 });
    animate(y, newY, { type: "spring", stiffness: 300 });
  };

  const handleNoClick = () => {
    if (noCount > 3) return;

    setNoCount(noCount + 1);
    moveRandom();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (noCount < 3) return;

      const btn = document.getElementById("no-btn");
      if (!btn) return;

      const rect = btn.getBoundingClientRect();

      const dx = rect.left - e.clientX;
      const dy = rect.top - e.clientY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        moveRandom();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [noCount]);
  const phrases = [
    "No 😢",
    "Are you sure? 🤨",
    "Really sure? 🥺",
    "Too late 😈",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center">
      {/* GIF */}
      <img
        src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
        alt="cute"
        className="w-40 mb-6"
      />

      <h1 className="text-3xl font-bold text-primary mb-6">
        {name}, will you be my Valentine? 💖
      </h1>

      <div className="flex gap-6">
        <button
          onClick={onAccept}
          className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-bold hover:scale-110 transition"
        >
          Yes ❤️
        </button>

        <motion.button
          id="no-btn"
          style={{ x, y }}
          onClick={handleNoClick}
          className="bg-red-500 text-white px-6 py-3 rounded-xl text-lg font-bold"
        >
          {phrases[Math.min(noCount, phrases.length - 1)]}
        </motion.button>
      </div>
    </div>
  );
}

export default Proposal;
