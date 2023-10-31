const userModel = require("../models/user");
const {generateToken, refreshToken}=require("../utils/jwt")
const bcrypt = require("bcrypt");

// Crear la funcion para el registro - signIN
const signin = async(req,res)=>{
    const{firstname, lastname, email, current_password}= req.body;
    try{
        if(!email){
            res.status(400).json({message : "el email es requerido"});
            throw new Error("el email es requerido")
        }
        if(!current_password){
            res.status(400).json({message : "la contraseña es requerida"});
            throw new Error("la contraseña es requerida")
        }
        const emailLowerCase = email.toLowerCase();
        const salt = await bcrypt.genSalt(10);
        const current_password_hash = await bcrypt.hash(current_password,salt);

        const newUser = await userModel.create({
            firstname,
            lastname,
            email: emailLowerCase,
            current_password: current_password_hash,
        })
        const userStorage = await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({message : err.message});
    }
};

const comparePassword= () =>{
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err, isMatch) => {
            if (err) {
                reject(err);
            } else {
                resolve(isMatch);
            }
        });
    });
}

const login = async(req,res)=>{
    const {email,current_password} = req.body;
    try{
        if( !email || !current_password ) {
            throw new Error("El email y la contraseña son obligatorios");
        }
        const emailLowerCase = email.toLowerCase();

        const userStore = await userModel.findOne({email: emailLowerCase}).exec();

        if(!userStore){
            throw new Error("El usuario no existe");
        }

        const check = await bcrypt.compare(
            current_password,
            userStore.current_password
        );
        if(!check){
            throw new Error("La contraseña no es correcta");
        }

        const token = await generateToken(userStore);
        const refresh = await refreshToken(userStore);
        console.log(token);

        res.status(200).json({
            acces: token,
            refresh: refresh
        });
        /* const isMatch = await userStore.comparePassword(current_password);
        console.log(isMatch);

        if(!isMatch){
            throw new Error("la contraseña no es correcta");
        } */
    }catch(err){
        res.status(400).json({message : err.message});
    }
};

const getMe = async(req,res) => {
    try{
        const { id } = req.user._doc;
        const user= await userModel.findById(id)
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message : err.message});
    }
};

const createUser = async (req, res) => {
    const { firstname, lastname, email, current_password } = req.body;
    try {
        // Validaciones y lógica para crear un nuevo usuario
        // Aquí puedes usar tus validaciones existentes

        // Guarda el nuevo usuario en la base de datos
        const newUser = await userModel.create({
            firstname,
            lastname,
            email: email.toLowerCase(),
            current_password,
        });
        const userStorage = await newUser.save();

        // Respuesta exitosa
        res.status(201).json(newUser);
    } catch (err) {
        // Manejo de errores
        res.status(400).json({ message: err.message });
    }
};

module.exports={
    signin,
    login,
    getMe,
    createUser,
};