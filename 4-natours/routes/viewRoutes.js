const express = require('express');
const viewController = require('./../controllers/viewController');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', viewController.getOverview); // Add this line
router.get('/overview', viewController.getOverview);
router.get('/tour/:slug', authController.protect, viewController.getTour);
router.get('/login', viewController.getLoginForm);

module.exports = router;
