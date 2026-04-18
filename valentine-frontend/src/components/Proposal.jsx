import { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

function Proposal({ name, onAccept }) {
  const [noCount, setNoCount] = useState(0);
  const [mobileGifIndex, setMobileGifIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile GIFs
  const mobileGifs = [
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",

    "/gifs/gun.jpg",
    "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",
    "/gifs/teasing.gif",
  ];

  // Random movement (desktop)
  const moveRandom = () => {
    const newX = Math.random() * 300 - 150;
    const newY = Math.random() * 300 - 150;

    animate(x, newX, { type: "spring", stiffness: 300 });
    animate(y, newY, { type: "spring", stiffness: 300 });
  };

  // Handle NO click
  const handleNoClick = () => {
    if (noCount >= 3) return;

    const next = noCount + 1;
    setNoCount(next);

    if (!isMobile) {
      moveRandom();
    } else {
      setMobileGifIndex((prev) => (prev + 1) % mobileGifs.length);
    }
  };

  // Desktop escape logic
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (noCount < 3) return;

      const btn = document.getElementById("no-btn");
      if (!btn) return;

      const rect = btn.getBoundingClientRect();

      // Use CENTER of button (fix)
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;

      const dx = btnX - e.clientX;
      const dy = btnY - e.clientY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        moveRandom();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [noCount, isMobile]);

  const phrases = [
    "No 😢",
    "Are you sure? 🤨",
    "Really sure? 🥺",
    "Too late 😈",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center px-4 overflow-hidden">
      {/* Main GIF */}
      <img
        src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
        alt="cute"
        className="w-32 sm:w-40 mb-6"
      />

      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
        {name}, will you be my Valentine? 💖
      </h1>

      {/* Mobile Reaction GIF */}
      {isMobile && (
        <div className="mb-6">
          <img
            src={mobileGifs[mobileGifIndex]}
            alt="reaction"
            className="w-32 sm:w-40 mx-auto rounded-xl shadow-lg"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <button
          onClick={onAccept}
          className="w-40 sm:w-auto bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-bold hover:scale-110 transition"
        >
          Yes ❤️
        </button>

        {!(isMobile && noCount >= 3) && (
          <motion.button
            id="no-btn"
            style={!isMobile ? { x, y } : {}}
            onClick={handleNoClick}
            className="w-40 sm:w-auto bg-red-500 text-white px-6 py-3 rounded-xl text-lg font-bold"
          >
            {phrases[Math.min(noCount, phrases.length - 1)]}
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default Proposal;
