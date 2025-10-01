import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Landing from "../pages/Landing/Landing.jsx";
import Admin from "../pages/Admin/Admin.jsx";
const FORM_URL = "http://localhost:5173/quiz/683ea0c790fa7b3a18f38e98";

function App() {
  const ID = FORM_URL.split("/")[4];
  useEffect(() => {
    console.log(ID);
  });

  return (
    <Routes>
      <Route path={`/`} element={<Landing />} />
      <Route path={`/quiz/:id`} element={<Landing />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;
