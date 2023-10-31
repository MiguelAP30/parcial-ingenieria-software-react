const express = require("express");
//app conecatr por el puerto local el express
//especificar los middleware a utilizar
const app = express();

const API_VERSION ="api/v1"

const userRoutes = require("./routes/user")
const serviceRoutes = require("./routes/service")
const quizRoutes = require("./routes/quiz")
const authRoutes = require("./routes/auth")

const concesionariaRoutes = require("./routes/concesionaria")

//Pruebas con extension REST Client
app.use(express.json());

//Pruebas desde postman
app.use(express.urlencoded({extended: true}))

//http://localhost:3100/api/v1/users
app.use(`/${API_VERSION}/users`,userRoutes); 

//http://localhost:3100/api/v1/services
app.use(`/${API_VERSION}/services`,serviceRoutes)

//http://localhost:3100/api/v1/services
app.use(`/${API_VERSION}/quizes`,quizRoutes)

//http://localhost:3100/api/v1/auth/signin
app.use(`/${API_VERSION}/auth`,authRoutes)

//http://localhost:3100/api/v1/users
app.use(`/${API_VERSION}/concesionarias`,concesionariaRoutes); 

module.exports= app;