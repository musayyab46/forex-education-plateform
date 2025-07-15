const Course = require('../models/Course');

// Add a new course (POST)
exports.addCourse = async (req, res) => {
  try {
    const { id,title, description, price, level ,instructor,rating,reviews,image,createdAt,modules} = req.body;

    const newCourse = new Course({ id,title, description, price, level,instructor,rating,reviews,image,createdAt,modules });
    const savedCourse = await newCourse.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create course', error: error.message });
  }
};
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving course", error: err.message });
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
