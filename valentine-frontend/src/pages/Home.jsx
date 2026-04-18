import { useState } from "react";
import API from "../api/api";
import SuccessModal from "../components/SuccessModal.jsx";

function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleGenerate = async () => {
    try {
      const { data } = await API.post("/generate", {
        name,
        gender,
      });

      const url = `https://valentine-proposal-project-amber.vercel.app/generate/${data.user.userId}`;
      setLink(url);
      setShowModal(true);
    } catch (error) {
      console.error(error);
      alert("Error generating proposal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-rose-100 to-pink-200">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-96 text-center border border-pink-200">
        <h1 className="text-3xl font-extrabold text-pink-500 mb-6 tracking-wide">
          Create Proposal 💕
        </h1>

        <input
          className="w-full p-3 border border-pink-200 rounded-xl mb-4 
      focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent
      transition duration-200 placeholder:text-gray-400"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="w-full p-3 border border-pink-200 rounded-xl mb-6 
      focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button
          onClick={handleGenerate}
          className="w-full bg-linear-to-r from-pink-400 to-rose-500 text-white py-3 rounded-xl font-semibold 
      shadow-lg hover:shadow-pink-300/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Generate 💖
        </button>
      </div>

      <SuccessModal
        link={link}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default Home;
