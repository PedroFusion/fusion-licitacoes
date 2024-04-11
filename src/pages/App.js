import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
