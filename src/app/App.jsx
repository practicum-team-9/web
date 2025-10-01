import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Landing from "../pages/Landing/Landing.jsx";
import Admin from "../pages/Admin/Admin.jsx";

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<Landing />} />
      <Route path={`/quiz/:id`} element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
