function SuccessModal({ show, link, onClose }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          margin: "100px auto",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>Link Generated 🎉</h2>
        <p>{link}</p>

        <button onClick={() => navigator.clipboard.writeText(link)}>
          Copy
        </button>

        <br />
        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SuccessModal;
