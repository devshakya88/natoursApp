const express = require('express');
const viewController = require('./../controllers/viewController');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', viewController.getOverview);
router.get('/overview', authController.isLoggedIn, viewController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, viewController.getTour);
router.get('/login', authController.isLoggedIn, viewController.getLoginForm);

module.exports = router;
