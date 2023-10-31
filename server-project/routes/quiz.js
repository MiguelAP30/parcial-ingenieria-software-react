const quizController = require("../controllers/quiz");
const express = require("express");

const router = express.Router();


// http://localhost:3100/api/v1/quizes/new-quizes
router.post('/new-quiz', quizController.createQuiz);

// http://localhost:3100/api/v1/quizes
router.get('/', quizController.getAllQuizes);

// http://localhost:3100/api/v1/quizes?id=****
router.get('/:id', quizController.getQuizesById);

// http://localhost:3100/api/v1/quizes?id=****
router.patch('/:id', quizController.updateQuizById);

// http://localhost:3100/api/v1/quizes?id=****
router.put('/:id', quizController.updateQuizById);

// http://localhost:3100/api/v1/quizes?id=****
router.delete('/:id', quizController.deleteQuizesById);

module.exports = router;