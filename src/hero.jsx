import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-start h-screen px-16 text-white max-w-2xl bg-cover bg-center"
      style={{ backgroundImage: 'url(./src/images/bg-image01.jpg  ) ' }}>
      <h1 className="text-6xl font-extrabold leading-tight">
        Fast, Reliable, and Hassle-Free Deliveries!
      </h1>
      <p className="mt-5 text-lg text-gray-200 leading-relaxed">
        Bridging the gap between vendors and customers with seamless logistics solutions.
        Get your orders delivered swiftly and securely.
      </p>
      <div className="mt-8 flex space-x-5">
        <button className="bg-blue-500 text-white px-7 py-3 rounded-lg hover:bg-blue-600 font-medium shadow-lg">
          Plan an Order
        </button>
        <button className="bg-gray-300 text-gray-900 px-7 py-3 rounded-lg hover:bg-gray-400 font-medium shadow-lg">
          Become a Vendor
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
