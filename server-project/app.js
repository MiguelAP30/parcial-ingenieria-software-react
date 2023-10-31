const express = require("express");
//app conecatr por el puerto local el express
//especificar los middleware a utilizar
const app = express();

const API_VERSION ="api/v1"

const userRoutes = require("./routes/user")
const authRoutes = require("./routes/auth")


//Pruebas con extension REST Client
app.use(express.json());

//Pruebas desde postman
app.use(express.urlencoded({extended: true}))

//http://localhost:3100/api/v1/users
app.use(`/${API_VERSION}/users`,userRoutes); 

//http://localhost:3100/api/v1/auth/signin
app.use(`/${API_VERSION}/auth`,authRoutes)


module.exports= app;