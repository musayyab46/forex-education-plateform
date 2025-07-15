const express = require('express');
const { addCourse, getAllCourses, getCourseById } = require('../controllers/courseController');
const requireAuth = require('../middleware/authMiddleware');

const router = express.Router();

// Add Course (Protected)
router.post('/', requireAuth, addCourse);

// Get All Courses (Public or Protected — your choice)
router.get('/', getAllCourses);

// ✅ Get a Single Course by ID (Public)
router.get('/:id', getCourseById);

module.exports = router;
