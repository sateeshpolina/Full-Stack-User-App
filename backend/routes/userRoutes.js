const express = require('express');
const router = express.Router();
const { getUsers } = require('../controller/userController');

// Route: GET /api/users
router.get('/', getUsers);

module.exports = router;