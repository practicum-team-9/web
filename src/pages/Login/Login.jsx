import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from '@mui/material';

function Login() {
    const [formState, setFormState] = useState({
        username: '',
        userpass: '',
    });
    //loginUser(username, password)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно выполнить отправку данных
        console.log(formState);
    };

    return (
        <Box
            component="loginForm"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '300px',
                margin: 'auto',
            }}
            onSubmit={handleSubmit}
        >
            <TextField
                label="ИМЯ"
                variant="outlined"
                name="user-name"
                value={formState.username}
                onChange={handleChange}
            />
            <TextField
                label="пароль "
                variant="outlined"
                name="userpass"
                value={formState.userpass}
                onChange={handleChange}
            />
            <Button variant="contained" type="submit">
                Отправить
            </Button>
        </Box>
    );

}

export default Login;