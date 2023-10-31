const { response } = require("express");
const serviceModel= require("../models/service")
/* module.exports = User; */

const createService= async(req, res)=> {
    try{
        const userService = req.body;
        console.log(userService);
        const newService = new serviceModel({...userService});
        console.log(newService);
        await newService.save();
        res.status(201).json(newService);
    }catch(err){
        res.status(400).json({message : err.message});
    }
};

const getAllServices = async(req, res)=>{
    try{
        const allServices = await serviceModel.find();
        res.status(200).json(allServices);
    }catch(err){
        res.status(400).json({message : err.message});
    }
}

const getServiceById = async (req, res) =>{
    try{
        const { id } = req.params;
        const serviceFind= await serviceModel.findById(id)
        console.log(serviceFind);
        res.status(200).json(serviceFind);
    }catch(err){
        res.status(404).json({message : err.message});
    }

};

const updateServiceById = async (req, res) =>{
    try{
        const { id } = req.params;
        const serviceDataEdit = req.body;
        const response= await serviceModel.findByIdAndUpdate(id, serviceDataEdit)
        res.status(200).json(response);
    }catch(err){
        res.status(400).json({message : err.message});
    }
}

const deleteServiceById = async (req, res) =>{
    try{
        const {id} = req.params;
        const response = await serviceModel.findByIdAndDelete(id);
        res.status(200).json({message: "Service eliminado exitosamente"})
    }catch (err){
        res.status(400).json({message:err});
    }
    
}

module.exports = {
    createService,
    getAllServices,
    getServiceById,
    updateServiceById,
    deleteServiceById
};