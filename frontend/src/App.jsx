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
const courses = [
  {
    id: 1,
    title: "Forex Trading for Beginners",
    instructor: "John Smith",
    rating: 4.5,
    reviews: 1200,
    price: "$49.99",
    image: image6,
    modules: [
      {
        id: 1,
        title: "Module 1: Introduction",
        isLocked: false,
        videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
      {
        id: 2,
        title: "Module 2: Basics",
        isLocked: true,
        videoUrl: "https://www.youtube.com/embed/Sagg08DrO5U",
      },
      {
        id: 3,
        title: "Module 3: Advanced Concepts",
        isLocked: true,
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      },
    ],
  },
  {
    id: 2,
    title: "Advanced Forex Strategies",
    instructor: "Jane Doe",
    rating: 4.7,
    reviews: 800,
    price: "$59.99",
    image: image7,
    modules: [
      {
        id: 1,
        title: "Strategy 1: RSI Divergence",
        isLocked: false,
        videoUrl: "https://www.youtube.com/embed/5DCAC1W1y10",
      },
      {
        id: 2,
        title: "Strategy 2: Breakout Trading",
        isLocked: true,
        videoUrl: "https://www.youtube.com/embed/nCZoAldyy0Q",
      },
      {
        id: 3,
        title: "Strategy 3: Fibonacci Levels",
        isLocked: true,
        videoUrl: "https://www.youtube.com/embed/9cNN3kH9U6o",
      },
    ],
  },
];


function App() {
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
        <Route path="/course/:id" element={<CourseDetailPage courses={courses}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
