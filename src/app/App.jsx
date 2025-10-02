import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import Forms from "../pages/Forms/Forms.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import { api } from "@/shared/api";
import { Page } from "@widgets";

function App() {
  return (
    <Page>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/quiz/:id"
          element={<Landing getFormById={api.getFormById} />}
        />
        <Route
          path="/admin"
          element={
            <Admin
              getForms={api.getForms}
              addForm={api.addForm}
              updateForm={api.updateForm}
              deleteForm={api.deleteForm}
            />
          }
        />
        <Route
          path="/choose-form"
          element={<Forms getForms={api.getForms} />}
        />
      </Routes>
    </Page>
  );
}

export default App;
