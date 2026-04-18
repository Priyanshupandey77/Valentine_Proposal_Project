import { useState } from "react";
import API from "../api/api";
import SuccessModal from "../components/SuccessModal.jsx";

function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [link, setLink] = useState("");
  const [showmodal, setShowModal] = useState(false);

  const handleGenerate = async () => {
    try {
      const { data } = await API.post("/generate", {
        name,
        gender,
      });

      const url = `http://localhost:5173/generate/${data.user.userId}`;
      setLink(url);
      setShowModal(true);
    } catch (error) {
      console.error(error);
      alert("Error generating proposal");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Create Proposal 💕</h1>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

      <select onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <br />
      <br />
      <button onClick={handleGenerate}>Generate</button>

      <SuccessModal link={link} show={showmodal} onClose={false} />
    </div>
  );
}

export default Home;
