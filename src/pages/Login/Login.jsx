import React, { useState } from "react";
import { TextField, Button, Box, Typography } from '@mui/material';
import { api } from "@/shared/api";
import Loader from "@/shared/ui/Loader/Loader.jsx";


function Login(onLogin) {

    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });

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
        setIsLoading(true)
        api.loginUser(formState)
            .then((res) => {
                if (res && res.data.access_token) {
                    onLogin(res.data.access_token)
                }
            }).catch((err) => {
            console.error("Ошибка входа:", err);
            setIsLoading(false);
            alert("Неверный логин или пароль");
        })
            .finally(() => {
                setIsLoading(false);
            });
    };
    if (isLoading) return <Loader />;
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '300px',
                margin: 'auto',
            }}
            onSubmit={handleSubmit}
        >
            <Typography variant="h5" align="center">
                Для входа введите имя и пароль
            </Typography>
            <TextField
                label="ИМЯ"
                variant="outlined"
                name="username"
                value={formState.username}
                onChange={handleChange}
            />
            <TextField
                label="пароль "
                variant="outlined"
                name="password"
                value={formState.password}
                onChange={handleChange}
            />
            <Button variant="contained" type="submit">
                Отправить
            </Button>
        </Box>
    );

}

export default Login;