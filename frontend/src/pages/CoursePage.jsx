import React from "react";
import CourseCard from "../components/CourseCard";
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.webp";

// Static Dummy Data

const CoursesPage = ({courses}) => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Forex Courses</h1>

      {/* Card Grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
