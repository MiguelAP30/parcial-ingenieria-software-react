const mongoose = require("mongoose");
const app = require("./app");
const {DB_HOST,DB_USER,DB_PASSWORD}= require("./config");

//Acceder a la configuración del archivo .env
require("dotenv").config();

//Acceder a variables del .env se usa process.env
const port= process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Conectados por el puerto ${port}`));

// Crear conexion a bd mongo
//mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}
//mongodb+srv://perez30:Mitologia2003@cluster0.9aduwv9.mongodb.net/
mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`)
    .then(()=>console.log('conect a mongoDB'))
    .catch((err)=>console.error(`Error al conectar a mongoDB${err}`))