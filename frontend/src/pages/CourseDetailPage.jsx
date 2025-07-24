import React, { useEffect, useState } from "react";
import { Lock, Unlock } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const navigate = useNavigate();

  const userSubscribed = false; // Change to true if needed

  useEffect(() => {
    axios
      .get(`https://forex-education-plateform.onrender.com/api/courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => {
        console.error("Error fetching course:", err);
        setCourse(null);
      });
  }, [id]);

  const handleClick = () => {
    navigate("/prices");
  };

  const handleModuleClick = (module) => {
    const isLocked = module.isLocked && !userSubscribed;
    if (isLocked) return;

    if (activeModuleId === module._id) {
      setActiveModuleId(null);
    } else {
      setActiveModuleId(module._id);
    }
  };

  if (!course) {
    return (
      <div className="text-center py-20 text-red-500 text-xl">
        Course not found or loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        {course.title} 
      </h1>
      <p className="mb-6 text-gray-600">{course.description}</p>

      {/* Module List */}
      <div className="space-y-6">
        {course.modules.map((module) => {
          const isLocked = module.isLocked && !userSubscribed;
          const isActive = activeModuleId === module._id;

          return (
            <div
              key={module._id}
              onClick={() => handleModuleClick(module)}
              className={`cursor-pointer border rounded-lg p-4 transition ${
                isLocked
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{module.title}</span>
                {isLocked ? (
                  <Lock className="w-5 h-5" />
                ) : (
                  <Unlock className="w-5 h-5 text-green-500" />
                )}
              </div>

              {isActive && !isLocked && module.videoUrl && (
                <div className="mt-2">
                  <iframe
                    width="100%"
                    height="315"
                    src={module.videoUrl}
                    title={`Module ${module._id} Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded"
                  ></iframe>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Subscribe Prompt */}
      {!userSubscribed && (
        <div className="mt-10 text-center">
          <p className="mb-4 text-red-500 font-semibold">
            Subscribe to unlock all modules!
          </p>
          <button
            onClick={handleClick}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Subscribe Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseDetailPage;
