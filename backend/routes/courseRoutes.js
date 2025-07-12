const express = require('express');
const { addCourse, getAllCourses } = require('../controllers/courseController');
const requireAuth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', requireAuth, addCourse);    // Add Course (Protected)
router.get('/', getAllCourses);              // Get All Courses (Public or protected—your choice)

module.exports = router;
