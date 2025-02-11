const express = require('express');
const router = express.Router();
const coffeeController = require('../controllers/coffeeController');

router.get('/coffees', coffeeController.getAllCoffees);
router.get('/coffees/:id', coffeeController.getCoffeeById);
router.post('/coffees', coffeeController.addCoffee);
router.delete('/coffees/:id', coffeeController.deleteCoffee);

module.exports = router;