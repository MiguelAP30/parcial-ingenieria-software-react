import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    InputAdornment,
    Modal,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';

const Registro = () => {
    const [openModal, setOpenModal] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        current_password: '',
        authorized: false,
    });
    const [loginData, setLoginData] = useState({
        email: '',
        current_password: '',
    });
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleLoginModalOpen = () => {
        setLoginModalOpen(true);
    };

    const handleLoginModalClose = () => {
        setLoginModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
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
        if (userData.authorized) {
            axios
                .post('http://localhost:3100/api/v1/auth/signin', userData)
                .then((response) => {
                    console.log(response.data);
                    alert('Usuario registrado exitosamente.');
                })
                .catch((error) => {
                    console.error(error);
                    alert('Error al registrar el usuario.');
                });
        } else {
            alert('Debes autorizar el tratamiento de datos para registrarte.');
        }
    };

    const handleLogin = () => {
        axios
            .post("http://localhost:3100/api/v1/auth/login", loginData)
            .then((response) => {
                const { access } = response.data;
                if (access) {
                    localStorage.setItem('token', access);
                    alert('Inicio de sesión exitoso.');
                } else {
                    alert('Credenciales de inicio de sesión incorrectas.');
                }
            })
            .catch((error) => {
                console.error(error);
                alert('Error al iniciar sesión.');
            });
    };

    const handleProtectedResourceAccess = () => {
        const token = localStorage.getItem('token');

        if (token) {
            axios
                .get('http://tu-servidor.com/api/ruta-protegida', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((response) => {
                })
                .catch((error) => {
                });
        } else {
            alert('Debes iniciar sesión para acceder a esta ruta protegida.');
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper className="xd" elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'RGB(250,250,250)' }}>
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
                <Button variant="contained" color="primary" onClick={handleRegister}>
                    Registrarse
                </Button>
                <Button variant="outlined" color="secondary">
                    Cancel
                </Button>
                <Button variant="outlined" onClick={handleLoginModalOpen}>
                    Login
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
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: 2,
                        width: 300,
                        border: '2px solid #000',
                        overflowY: 'auto',
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Términos y Condiciones
                    </Typography>
                    
                    <p>
                    POLÍTICA GENERAL DE TRATAMIENTO DE DATOS PERSONALES 
                    CLIENTES, PROSPECTOS DE CLIENTES, FUNCIONARIOS, PROVEEDORES Y VISITANTES

                    ENTRADA EN VIGENCIA: OCTUBRE DE 2023
                    ÚLTIMA VERSIÓN: OCTUBRE DE 2023

                    INTRODUCCIÓN
                    Nombre pág. S.A.S. (en adelante, Nombre pág) es responsable de los Datos Personales e información que le suministran sus clientes, prospectos de clientes proveedores, contratistas, y visitantes (en adelante, los Titulares).

                    En la presente Política de Tratamiento se establecen las finalidades, medidas y procedimientos de las Bases de Datos de Nombre pág así como los mecanismos con que los Titulares cuentan para conocer, actualizar, rectificar, suprimir los datos suministrados o revocar la autorización que se otorga con la aceptación de la presente Política de Tratamiento.

                    La aceptación de propuestas, la celebración de contratos, el diligenciamiento de formatos, el acceso a los Servicios de la página web www.nombrepág.co (en adelante la Página Web) y/o la aceptación expresa o inequívoca de las presente políticas, implica la aceptación de los Titulares de la Política de Tratamiento y Protección de Datos Personales y su autorización para los usos y otros tratamientos que aquí se describen.
                    </p>
                    <Button onClick={handleCloseModal} variant="contained" color="primary">
                        Cerrar
                    </Button>
                </Box>
            </Modal>
            <Modal open={loginModalOpen} onClose={handleLoginModalClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: 2,
                        width: 300,
                        border: '2px solid #000',
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Iniciar sesión
                    </Typography>
                    <TextField
                        label="Email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        name="current_password"
                        value={loginData.current_password}
                        onChange={handleLoginInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={handleLogin}>
                        Login
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleLoginModalClose}>
                        Cancel
                    </Button>
                </Box>
            </Modal>
        </Container>
    );
};

export default Registro;
