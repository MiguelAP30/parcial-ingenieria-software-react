const serviceController = require("../controllers/service");
const express = require("express");

const router = express.Router();


// http://localhost:3100/api/v1/users/new-user
router.post('/new-service', serviceController.createService);

// http://localhost:3100/api/v1/users
router.get('/', serviceController.getAllServices);

// http://localhost:3100/api/v1/users?id=****
router.get('/:id', serviceController.getServiceById);

// http://localhost:3100/api/v1/users?id=****
router.patch('/:id', serviceController.updateServiceById);

// http://localhost:3100/api/v1/users?id=****
router.put('/:id', serviceController.updateServiceById);

// http://localhost:3100/api/v1/users?id=****
router.delete('/:id', serviceController.deleteServiceById);

module.exports = router;