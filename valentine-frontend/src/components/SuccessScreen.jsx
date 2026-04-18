import { motion } from "framer-motion";

function SuccessScreen({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-white rounded-3xl p-10 text-center shadow-2xl"
      >
        <img
          src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
          alt="success"
          className="w-40 mx-auto mb-4"
        />

        <h1 className="text-3xl font-black text-pink-500 mb-3">
          She said YES ❤️
        </h1>

        <p className="text-gray-600 mb-6">Congratulations! You did it 🎉</p>

        <button
          onClick={onClose}
          className="bg-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          Close 💖
        </button>
      </motion.div>
    </div>
  );
}

export default SuccessScreen;
