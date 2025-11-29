import "./App.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "../pages/Landing/Landing.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import Forms from "../pages/Forms/Forms.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import { api } from "@/shared/api";
import { Page } from "@widgets";
import Login from  "../pages/Login/Login.jsx";
import Loader from "@/shared/ui/Loader/Loader.jsx";
import ExtensionPage from "@/pages/ExtensionPage/ExtensionPage";

function App() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setIsLoading(false);
            return;
        }
        api.checkToken()
            .then((res) => {
                if (res.data.valid) {
                    setAuthorized(true);
                } else {
                    localStorage.removeItem("token");
                }
            })
            .catch(() => {
                localStorage.removeItem("token");
                console.error("Ошибка при проверке токена:", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const onLogin = (token) => {
        localStorage.setItem("token", token);
        setAuthorized(true);
        navigate("/admin", { replace: true });
    };


    const onLogout = () => {
        localStorage.removeItem('token');
        setAuthorized(false);
        navigate("/login", { replace: true });
    };

    if (isLoading) return <Loader />;

  return (
    <Page>
      <Routes>
        <Route
          path="/quiz/:id"
          element={<Landing getFormById={api.getFormById} />}
        />
        <Route
          path="/admin"
          element={
            authorized ? 
            <Admin
                onLogout={onLogout}
              getForms={api.getForms}
              addForm={api.addForm}
              updateForm={api.updateForm}
              deleteForm={api.deleteForm}
            /> : 
                <Navigate to="/login" replace />          
          }
        />
        <Route
          path="/choose-form"
          element={<Forms getForms={api.getForms} />}
        />
          <Route
              path="/login"
              element={authorized ? <Navigate to="/admin" replace /> : <Login  onLogin={onLogin} />}
          />
          <Route path="/extensions" element={<ExtensionPage />} />
          <Route path="/extensions/ybrowser" element={<ExtensionPage />} />
          <Route path="/extensions/gchrome" element={<ExtensionPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Page>
  );
}

export default App;
