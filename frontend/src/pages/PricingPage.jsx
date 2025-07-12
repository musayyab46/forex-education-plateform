import React from "react";
import SubscribeButton from "../components/SubscibeButton";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-xl w-full border border-gray-100">
        <h1 className="text-4xl font-extrabold text-center text-emerald-700 mb-2">
          Premium Subscription
        </h1>
        <p className="text-center text-gray-600 mb-6 text-lg">
          Unlock all Forex courses, market analysis, and exclusive content for just
          <span className="text-emerald-600 font-bold"> ₹499/month</span>
        </p>

        <ul className="space-y-3 text-gray-700 mb-6">
          <li>✅ Unlimited access to all Forex courses</li>
          <li>✅ Weekly live market breakdowns</li>
          <li>✅ Demo trading sessions & tools</li>
          <li>✅ Private premium community access</li>
          <li>✅ Certificate of completion</li>
        </ul>

        <div className="flex justify-center">
          <SubscribeButton />
        </div>

        <p className="text-xs text-center text-gray-400 mt-4">
          Cancel anytime. 100% money-back guarantee within 7 days.
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
