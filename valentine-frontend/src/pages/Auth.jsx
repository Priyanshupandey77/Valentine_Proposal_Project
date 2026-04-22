import { useState } from "react";

function Auth({ userId, onSuccess }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "https://valentine-proposal-project.onrender.com/api/users/verify",

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            name: input,
          }),
        },
      );

      const data = await res.json();

      if (!data.success) {
        setError("Wrong name");
        return;
      }

      onSuccess(true);
    } catch (error) {
      setError("something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h2 className="text-xl font-bold mb-4">
          Enter your name to continue 💖
        </h2>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4"
          placeholder="Enter name..."
        />

        <button
          onClick={handleSubmit}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg"
        >
          Continue
        </button>
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  );
}

export default Auth;
