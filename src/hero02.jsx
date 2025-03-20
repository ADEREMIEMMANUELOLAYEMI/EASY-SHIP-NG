import react from "react"


const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: "url('./src/images/bg-image01.jpg')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Fast, Reliable, and <br /> Hassle-Free Deliveries!
        </h1>
        <p className="mt-4 text-lg">
          Bridging the gap between vendors and customers with seamless logistics solutions.
          Get your orders delivered swiftly and securely.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
            Plan an Order
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg">
            Become a Vendor
          </button>
        </div>
      </div>

      {/* Decorative Blue Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] border border-blue-400 absolute top-10 left-6 rounded-full opacity-50"></div>
        <div className="w-[60%] h-[60%] border border-blue-400 absolute bottom-10 right-6 rounded-full opacity-50"></div>
      </div>
      
    </section>
  );
};

export default HeroSection;
