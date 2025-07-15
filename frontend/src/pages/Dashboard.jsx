import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {
  BarChart3,
  TrendingUp,
  PlayCircle,
  DollarSign,
} from "lucide-react";

// ✅ Import all images correctly
import featureImage1 from "../assets/image1.png";
import featureImage2 from "../assets/image2.png";
import featureImage3 from "../assets/image3.png";
import featureImage4 from "../assets/image4.png";
import featureImage5 from "../assets/image5.webp";

import courseImage1 from "../assets/image6.jpeg";
import courseImage2 from "../assets/image7.webp";
import courseImage3 from "../assets/image8.jpg";

// ✅ Feature image slider data (corrected)
const featureSlides = [
  { title: "Systemic Learning", image: featureImage1 },
  { title: "Demo Trading", image: featureImage2 },
  { title: "Live Market Rates", image: featureImage3 },
  { title: "Trading Insights", image: featureImage4 },
  { title: "Currency Converter", image: featureImage5 },
];

// ✅ Course title to image mapping (must match titles from backend)
const courseImages = {
  "Forex Basics": courseImage1,
  "Technical Analysis": courseImage2,
  "Risk Management": courseImage3,
};

const Dashboard = () => {
  const navigate=useNavigate();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login if not logged in
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      {/* Feature Slider */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-gray-800">💡 Platform Features</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {featureSlides.map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 rounded-xl bg-white shadow-md p-4"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
              <h3 className="text-center mt-2 text-sm font-medium text-gray-700">
                {slide.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, John! 👋</h1>
        <p className="text-gray-600">Continue your Forex learning journey.</p>
      </div>

      {/* Course Progress Cards */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">📚 Your Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length === 0 ? (
            <p className="text-gray-500">No courses found.</p>
          ) : (
            courses.map((course) => (
              <div
                key={course._id}
                className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <img
                  src={courseImages[course.title] || courseImage1}  // default image if no match
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Level: {course.level} | Price: ₹{course.price}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bottom Widgets */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <BarChart3 className="text-blue-500" size={28} />
          <div>
            <p className="font-semibold text-gray-700">Learning Stats</p>
            <p className="text-sm text-gray-500">5 hours this week</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <TrendingUp className="text-green-500" size={28} />
          <div>
            <p className="font-semibold text-gray-700">Live Rates</p>
            <p className="text-sm text-gray-500">USD/INR: 83.21</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <PlayCircle className="text-purple-500" size={28} />
          <div>
            <p className="font-semibold text-gray-700">Resume Learning</p>
            <p className="text-sm text-gray-500">Technical Analysis</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <DollarSign className="text-yellow-500" size={28} />
          <div>
            <p className="font-semibold text-gray-700">Demo Trade</p>
            <p className="text-sm text-gray-500">Try it risk-free!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
