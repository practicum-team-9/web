import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { api } from "@/shared/api";
import Loader from "@/shared/ui/Loader/Loader.jsx";

import "./Login.css";

function Login({ onLogin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (isLoading) return <Loader />;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    api
      .loginUser(formState)
      .then((res) => {
        if (res && res.data.access_token) {
          onLogin(res.data.access_token);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.detail);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  if (isLoading) return <Loader />;
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ fontFamily: "ActayWide, sans-serif", marginBottom: "25px" }}
        >
          Вход в личный кабинет
        </Typography>
        <TextField
          label="Логин или Email"
          variant="outlined"
          name="username"
          value={formState.username}
          onChange={handleChange}
          sx={{ fontFamily: "ActayWide, sans-serif", marginBottom: "9px" }}
          autoComplete="on"
        />
        <TextField
          label="Пароль"
          variant="outlined"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
          sx={{ fontFamily: "ActayWide, sans-serif" }}
          autoComplete="on"
        />
        <div className="button-container">
          <p className="error">{error}</p>
          <Button
            variant="contained"
            type="submit"
            sx={{
              fontFamily: "ActayWide, sans-serif",
              backgroundColor: "#000",
              borderRadius: "32px",
              width: "262px",
            }}
            disabled={!formState.password || !formState.username}
          >
            Войти
          </Button>
        </div>
      </Box>
    </>
  );
}

export default Login;
