import React, { useState } from 'react';
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, InputAdornment, Modal, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import "./Registro.scss";


const Registro = () => {
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
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
        console.log(userData);
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" component="div">
                    Registro
                </Typography>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={userData.lastName}
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
                    name="password"
                    value={userData.password}
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
