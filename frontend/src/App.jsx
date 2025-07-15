// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import QuizPage from "./pages/QuizPage";
import TradePage from "./pages/TradePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/Signuppage";
import Dashboard from "./pages/Dashboard";
import CurrencyConverterCard from "./components/CurrencyConverter";
import MainLayout from "./components/MainLayout";
import LiveRatesPage from "./pages/LiveRatesPage";
import ChartPage from "./pages/ChartPage";
import CoursesPage from "./pages/CoursePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import image6 from "./assets/image6.jpeg";
import image7 from "./assets/image7.webp";
import PricingPage from "./pages/PricingPage";
import Profile from './pages/Profile';
import { useEffect, useState } from "react";
import {getCourses} from './api/courseApi';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch all courses from backend
    const fetchCourses = async () => {
      try {
       const courseData=await getCourses();
        setCourses(courseData); // Ensure your backend returns an array of courses
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div className="overscroll-none">
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/trade" element={<TradePage />} />
        <Route path="/currency" element={<CurrencyConverterCard/>}/>
        <Route path="/LiveRates" element={<LiveRatesPage/>}/>
        <Route path="/courses" element={<CoursesPage courses={courses}/>}/>
        <Route path="/prices" element={<PricingPage/>}/>
        </Route>
        {/* Routes without navigation bar */}
        <Route path="/chart/:baseCurrency/:targetCurrency" element={<ChartPage />} />
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course/:id" element={<CourseDetailPage courses={courses}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
