const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/authentication');
const IFTTTController = require('../controllers/ifttt');

router.post('/turnpcon', checkAuth, IFTTTController.TurnPCOn);

module.exports = router;
