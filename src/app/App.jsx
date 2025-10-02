import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "../pages/Landing/Landing.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import Forms from "../pages/Forms/Forms.jsx";

function App() {
  return (
    <Routes>
      <Route path="/quiz/:id" element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/choose-form" element={<Forms />} />
    </Routes>
  );
}

export default App;
