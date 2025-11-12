import "./App.css";
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

function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setAuthorized(false);
            setIsLoading(false);
            return;
        }
        api.checkToken()
            .then((res) => {
                setAuthorized(res.valid === true);
            })
            .catch((err) => {
                console.error("Ошибка при проверке токена:", err);
                setAuthorized(false);
                localStorage.removeItem("token");
            }).finally(() => setIsLoading(false));;
    }, []);
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
            authorized ? (
            <Admin
              setLoggedIn
              getForms={api.getForms}
              addForm={api.addForm}
              updateForm={api.updateForm}
              deleteForm={api.deleteForm}
            />) : (
                <Navigate to="/login" replace />
          )
          }
        />
        <Route
          path="/choose-form"
          element={<Forms getForms={api.getForms} />}
        />
          <Route
              path="/login"
              element={authorized ? <Navigate to="/admin" replace /> : <Login  setAuthorized />}
          />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Page>
  );
}

export default App;
