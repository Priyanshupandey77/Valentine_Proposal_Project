import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Generate from "./pages/Generate.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate/:userId" element={<Generate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
