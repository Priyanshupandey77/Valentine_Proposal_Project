function SuccessModal({ show, link, onClose }) {
  if (!show) return null;

  return (

    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/95 w-90 rounded-2xl p-6 text-center shadow-2xl animate-pop">
        <h2 className="text-xl font-semibold mb-3">🎉 Link Generated</h2>

        <p className="bg-gray-100 text-sm p-3 rounded-lg break-all">{link}</p>

        <button
          onClick={() => navigator.clipboard.writeText(link)}
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Copy Link
        </button>

        <button
          onClick={onClose}
          className="mt-2 w-full border border-gray-300 hover:bg-gray-100 py-2 rounded-lg transition"
        >
          Close
        </button>
      </div>

      {/* animation */}
      <style>
        {`
      @keyframes pop {
        0% { transform: scale(0.85); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .animate-pop {
        animation: pop 0.2s ease-out;
      }
    `}
      </style>
    </div>
  );
}

export default SuccessModal;
