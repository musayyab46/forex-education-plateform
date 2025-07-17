const express = require('express');
const { signup, login ,getProfile} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
const requireAuth = require('../middleware/authMiddleware');


router.get('/profile', requireAuth, getProfile);

module.exports = router;
