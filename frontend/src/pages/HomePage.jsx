import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Master Forex Trading – From Zero to Pro
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
          Learn Forex fundamentals, test your knowledge, and simulate real-world trades — all in one platform.
        </p>
        <Link to="/login">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Start Learning
          </button>
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <FeatureCard icon="📘" title="Beginner-Friendly Lessons" desc="Understand Forex from the ground up with easy, step-by-step lessons." />
          <FeatureCard icon="🧠" title="Interactive Quizzes" desc="Reinforce what you've learned with fun and challenging quizzes." />
          <FeatureCard icon="💰" title="Trade Simulator" desc="Practice trading in a safe environment with virtual money." />
          <FeatureCard icon="📊" title="Live Forex Rates" desc="Track real-time exchange rates with accurate data." />
          <FeatureCard icon="🌍" title="Global Accessibility" desc="Learn anywhere, anytime — no prior experience needed." />
          <FeatureCard icon="📱" title="Mobile Responsive" desc="Use the platform seamlessly on mobile, tablet, or desktop." />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-white">
        <h3 className="text-2xl font-semibold mb-4">Ready to begin your Forex journey?</h3>
        <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Start Now
          </button>
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default HomePage;
