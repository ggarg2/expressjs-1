const express = require('express');
const router = express.Router();
const DogController = require('../controllers/dog.controller');

router.get('/', DogController.getDogs);

router.post('/', DogController.createDog);

router.get('/:id', DogController.getDogById);

router.put('/:id', DogController.updateDog);

router.delete('/:id', DogController.deleteDog);

module.exports = router;
