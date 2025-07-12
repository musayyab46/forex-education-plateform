const Course = require('../models/Course');

// Add a new course (POST)
exports.addCourse = async (req, res) => {
  try {
    const { title, description, price, level } = req.body;

    const newCourse = new Course({ title, description, price, level });
    const savedCourse = await newCourse.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create course', error: error.message });
  }
};

// Get all courses (GET)
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch courses', error: error.message });
  }
};
