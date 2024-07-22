const express = require('express');
const viewController = require('./../controllers/viewController');
const router = express.Router();

router.get('/', viewController.getOverview); // Add this line
router.get('/overview', viewController.getOverview);
router.get('/tour', viewController.getTour);

module.exports = router;
