const concesionariaController = require("../controllers/concesionaria");
const express = require("express");
const md_auth =require("../middlewares/authenticatedValidation");

const router = express.Router();


// http://localhost:3100/api/v1/users/new-user
router.post('/new-concesionaria',concesionariaController.createConsesionaria);

// http://localhost:3100/api/v1/users
router.get('/', concesionariaController.getAllConsesionaria);

// http://localhost:3100/api/v1/users?id=****
router.get('/:id', concesionariaController.getConsesionariaById);

// http://localhost:3100/api/v1/users?id=****
router.patch('/:id', concesionariaController.updateConcesionariaById);

// http://localhost:3100/api/v1/users?id=****
router.put('/:id', concesionariaController.updateConcesionariaById);

// http://localhost:3100/api/v1/users?id=****
router.delete('/:id', concesionariaController.deleteConcesionariaById);

router.delete('/:concesionariaId/vehiculos/:vehiculoId', concesionariaController.deleteVehiculoFromConcesionariaById);

router.get('/vehiculos/:vehiculoId', concesionariaController.getVehiculoById);


module.exports = router;