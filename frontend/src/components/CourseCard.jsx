import React from "react";
import { Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate=useNavigate();
  return (

    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full sm:w-72 relative">
       <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
    <Crown className="w-4 h-4 text-yellow-500" />
  </div>
      {/* Course Image */}
      <img src={`https://forex-education-plateform.onrender.com${course.image}`} alt={course.title} className="h-40 w-full object-cover" />

      {/* Content section */}
      <div className="p-4">
        {/* Course Title */}
        <h2 className="text-lg font-semibold mb-1">{course.title}</h2>

        {/* Instructor */}
        <p className="text-sm text-gray-600 mb-2">By {course.instructor}</p>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-sm mb-2">
          ⭐ {course.rating} <span className="text-gray-500 ml-1">({course.reviews} reviews)</span>
        </div>

        {/* Price */}
        

        {/* Button */}
        <button  onClick={()=> navigate(`/course/${course._id}`)} className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
