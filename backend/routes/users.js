const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
