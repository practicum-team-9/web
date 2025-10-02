import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Landing from "../pages/Landing/Landing.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import Forms from "../pages/Forms/Forms.jsx";
import Template from "@/widgets/Template/Template.jsx";
const FORM_URL = "http://localhost:5173/quiz/683ea0c790fa7b3a18f38e98";

function App() {
  
  return (
    <Routes>
      <Route path={`/`} element={<Landing />} />
      <Route path={`/quiz/:id`} element={<Landing />} />
      <Route path='/admin' element={<Admin />} />
        <Route path='/1' element={<Template />} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/forms" element={<Forms/>} />
      <Route path="/admin" element={<Admin />} />
        
    </Routes>
  );
}

export default App;
