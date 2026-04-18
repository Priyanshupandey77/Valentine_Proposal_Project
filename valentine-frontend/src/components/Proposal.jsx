import { useState } from "react";

function Proposal({ name, onAccept }) {
  const [noCount, setNoCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{name}, will you be my Valentine? 💖</h1>

      <button onClick={onAccept}>Yes ❤️</button>

      <button
        onClick={() => setNoCount(noCount + 1)}
        style={{
          marginLeft: "20px",
          position: "relative",
          left: noCount * 20 + "px",
        }}
      >
        No 😢
      </button>
    </div>
  );
}

export default Proposal;
