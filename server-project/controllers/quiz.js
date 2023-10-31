const { response } = require("express");
const quizModel= require("../models/quiz")
/* module.exports = User; */

const createQuiz= async(req, res)=> {
    try{
        const quizData = req.body;
        console.log(quizData);
        const newQuiz = new quizModel({...quizData});
        console.log(newQuiz);
        await newQuiz.save();
        res.status(201).json(newQuiz);
    }catch(err){
        res.status(400).json({message : err.message});
    }
};

const getAllQuizes = async(req, res)=>{
    try{
        const allQuizes = await quizModel.find();
        res.status(200).json(allQuizes);
    }catch(err){
        res.status(400).json({message : err.message});
    }
}

const getQuizesById = async (req, res) =>{
    try{
        const { id } = req.params;
        const quizFind= await quizModel.findById(id)
        console.log(quizFind);
        res.status(200).json(quizFind);
    }catch(err){
        res.status(404).json({message : err.message});
    }

};

const updateQuizById = async (req, res) =>{
    try{
        const { id } = req.params;
        const quizDataEdit = req.body;
        const response= await quizModel.findByIdAndUpdate(id, quizDataEdit)
        res.status(200).json(response);
    }catch(err){
        res.status(400).json({message : err.message});
    }
}

const deleteQuizesById = async (req, res) =>{
    try{
        const {id} = req.params;
        const response = await quizModel.findByIdAndDelete(id);
        res.status(200).json({message: "Quiz eliminado exitosamente"})
    }catch (err){
        res.status(400).json({message:err});
    }
    
}

module.exports = {
    createQuiz,
    getAllQuizes,
    getQuizesById,
    updateQuizById,
    deleteQuizesById
};