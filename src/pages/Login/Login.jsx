import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { api } from "@/shared/api";
import Loader from "@/shared/ui/Loader/Loader.jsx";
import ImageTop from "../../assets/images/img-top.svg";
import ImageBottom from "../../assets/images/img-bottom.svg";

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
      <img src={ImageTop} className="img-top" alt="Логотип сердце в руках" />
      <div className="login-container">
        <h2 className="login-header">Вход в личный кабинет</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Имя пользователя
            <input placeholder='Логин или Email' type="text" name="username" id="username" value={formState.username ? formState.username : ''} onChange={handleChange} />
          </label>
          <label className="form-label">
            Пароль
            <input placeholder='Пароль' type="password" name="password" id="password" value={formState.password ? formState.password : ''} onChange={handleChange} />
          </label>
          <div className="form-bot">
            <label>
              <input type="checkbox" />
              Запомнить меня
            </label>
            <Button type="submit" disabled={!formState.password || !formState.username}>Войти</Button>
          </div>
        </form>
        
      </div>
      <img
        src={ImageBottom}
        className="img-bottom"
        alt="Логотип коробка в руках"
      />
    </>
  );
}

export default Login;


/*
      <Typography
        variant="h2"
        align="center"
        sx={{ fontFamily: "ActayWide, sans-serif", marginBottom: "25px" }}
      >
        Вход в личный кабинет
      </Typography>
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
*/