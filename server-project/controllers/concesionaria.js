const { response } = require("express");
const concesionariaModel= require("../models/concesionaria")
/* module.exports = User; */

const createConsesionaria= async(req, res)=> {
    try{
        const userData = req.body;
        console.log(userData);
        const newUser = new concesionariaModel({...userData});
        console.log(newUser);
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({message : err.message});
    }
};

const getAllConsesionaria = async(req, res)=>{
    try{
        const allUsers = await concesionariaModel.find();
        res.status(200).json(allUsers);
    }catch(err){
        res.status(400).json({message : err.message});
    }
}

const getConsesionariaById = async (req, res) =>{
    try{
        const { id } = req.params;
        const userFind= await concesionariaModel.findById(id)
        console.log(userFind);
        res.status(200).json(userFind);
    }catch(err){
        res.status(404).json({message : err.message});
    }

};

const updateConcesionariaById = async (req, res) =>{
    try{
        const { id } = req.params;
        const userDataEdit = req.body;
        const response= await concesionariaModel.findByIdAndUpdate(id, userDataEdit)
        res.status(200).json(response);
    }catch(err){
        res.status(400).json({message : err.message});
    }
}

const deleteConcesionariaById = async (req, res) =>{
    try{
        const {id} = req.params;
        const response = await concesionariaModel.findByIdAndDelete(id);
        res.status(200).json({message: "Vehiculo eliminado exitosamente"})
    }catch (err){
        res.status(400).json({message:err});
    }
    
}

const deleteVehiculoFromConcesionariaById = async (req, res) => {
    try {
        const { concesionariaId, vehiculoId } = req.params;

        // Buscar la concesionaria por su ID
        const concesionaria = await concesionariaModel.findById(concesionariaId);

        if (!concesionaria) {
            return res.status(404).json({ message: "Concesionaria no encontrada" });
        }

        // Buscar el vehículo en la lista de vehículos de la concesionaria por su ID y eliminarlo
        const vehiculoIndex = concesionaria.lista_de_vehiculos.findIndex(
            (vehiculo) => vehiculo._id == vehiculoId
        );

        if (vehiculoIndex === -1) {
            return res.status(404).json({ message: "Vehículo no encontrado en la concesionaria" });
        }

        concesionaria.lista_de_vehiculos.splice(vehiculoIndex, 1);

        // Guardar la concesionaria actualizada
        const updatedConcesionaria = await concesionaria.save();

        res.status(200).json({ message: "Vehículo eliminado exitosamente", concesionaria: updatedConcesionaria });
    } catch (err) {
        res.status(400).json({ message: err });
    }
}

const getVehiculoById = async (req, res) => {
    try {
        const { vehiculoId } = req.params;

        // Realiza una consulta para buscar el vehículo por su ID
        const vehiculo = await concesionariaModel.findOne({ "lista_de_vehiculos._id": vehiculoId }, { "lista_de_vehiculos.$": 1 });

        if (!vehiculo) {
            return res.status(404).json({ message: "Vehículo no encontrado" });
        }

        res.status(200).json({ vehiculo: vehiculo.lista_de_vehiculos[0] });
    } catch (err) {
        res.status(400).json({ message: err });
    }
}
module.exports = {
    createConsesionaria,
    getAllConsesionaria,
    getConsesionariaById,
    updateConcesionariaById,
    deleteConcesionariaById,
    deleteVehiculoFromConcesionariaById,
    getVehiculoById
};