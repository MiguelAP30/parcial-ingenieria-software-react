const jwt = require("../utils/jwt");
const userModel = require("../models/user");

const ensureAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // Verifica el token
        const user = await userModel.findById(decodedToken.id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user; // Establece el usuario autenticado en el objeto de solicitud
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Unauthorized" });
    }
};
/* const ensureAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authorization.split(" ")[1];
        console.log("token",token);
        const decodedToken = jwt.decodedToken(token, process.env.SECRET_KEY);
        const user = await userModel.findById(decodedToken.id);
        console.log("user",user);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = { ...payload};
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Unauthorized" });
    }
}; */

module.exports = {ensureAuth};