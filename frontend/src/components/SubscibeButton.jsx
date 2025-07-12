// src/components/SubscribeButton.js
import React from "react";

const SubscribeButton = () => {
  const loadScript = (src) =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_qadJZJ4MQyygq7", // Replace with your Razorpay Test Key
      amount: 49900, // amount in paise (₹499)
      currency: "INR",
      name: "Forex Edu Platform",
      description: "Premium Subscription",
      image: "https://yourlogo.com/logo.png", // optional
      handler: function (response) {
        alert("✅ Payment Successful! Payment ID:\n" + response.razorpay_payment_id);
        // You can store this payment ID or send it to backend
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      notes: {
        course_access: "Forex Mastery",
      },
      theme: {
        color: "#0f766e",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300"
    >
      Subscribe Now
    </button>
  );
};

export default SubscribeButton;
