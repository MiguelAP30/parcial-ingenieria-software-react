
import React, { useState } from 'react';
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, InputAdornment, Modal, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import '../registro/Registro.scss';
import axios from "axios";


const Registro = () => {
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        current_password: '',
        authorized: false,
    });

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setUserData({
            ...userData,
            [name]: checked,
        });
    };

    const handleRegister = () => {
        // Validar si el usuario ha marcado el checkbox de autorización
        if (userData.authorized) {
            axios
                .post("http://localhost:3100/api/v1/auth/signin", userData)
                .then((response) => {
                    console.log(response.data);
                    alert("Usuario registrado exitosamente.");
                })
                .catch((error) => {
                    console.error(error);
                    alert("Error al registrar el usuario.");
                });
        } else {
            alert("Debes autorizar el tratamiento de datos para registrarte.");
        }
    };

    
    return (
        <Container maxWidth="xs">
            <Paper className="xd" elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'RGB(250,250,250)' }}>
                <Typography variant="h5" component="div">
                    Registro
                </Typography>
                <TextField
                    label="First Name"
                    name="firstname"
                    value={userData.firstname}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Last Name"
                    name="lastname"
                    value={userData.lastname}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    name="current_password"
                    value={userData.current_password}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="authorized"
                            checked={userData.authorized}
                            onChange={handleCheckboxChange}
                        />
                    }
                    label="Autorizo tratamiento de datos"
                    sx={{ textAlign: 'left' }}
                />
                <Button variant="outlined" onClick={handleOpenModal}>
                    Ver términos y condiciones
                </Button>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleRegister}
                        >
                            Registrarse
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            fullWidth
                        >
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: 2,
                    width: 300,
                    border: '2px solid #000',
                }}>
                    <Typography variant="h6" gutterBottom>
                        Términos y Condiciones
                    </Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <Button onClick={handleCloseModal} variant="contained" color="primary">
                        Cerrar
                    </Button>
                </Box>
            </Modal>
        </Container>
    );
};

export default Registro;
