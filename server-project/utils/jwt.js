const jwt = require("jsonwebtoken");


const generateToken = (user)=>{
    const expirationToken = new Date();
    // De la variable que contiene la fecha actual, se consulta la hora
    expirationToken.setHours(expirationToken.getHours()+1);
    //generemos el payload del jwt
    const payload={
        id: user._id,
        email: user.email,
        iat: Date.now(),
        exp: parseInt(expirationToken.getTime()/1000),
    };
    console.log("payload =>",payload);
    //generamos el token
    const acces = jwt.sign(JSON.stringify(payload),process.env.SECRET_KEY);
    return acces;
};

const refreshToken = (user) => {
    console.log(user)

    const expirationToken = new Date();
    //Actualizamos cada mes el token
    expirationToken.setMonth(expirationToken.getMonth()+1);

    const payload={
        id: user._id,
        email: user.email,
        iat: Date.now(),
        exp: expirationToken,
    };
    const refresh = jwt.sign(JSON.stringify(payload),process.env.SECRET_KEY);
    return refresh;
}

const decodeAccessToken = (token)=>{
    const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
    return verifyToken;
}
module.exports={
    generateToken,
    refreshToken,
}