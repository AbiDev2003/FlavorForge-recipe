import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/tailwind.css';

const backgroundImages = [
  "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=1920&q=80", // Dark cooking
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80", // Dark food prep
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920&q=80", // Dark salad
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=80", // Dark pizza
  "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=1920&q=80", // Dark cooking scene
];

const SectionOne = ({onScrollToAbout}) => {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(timer.current);
  }, []);
  const navigate = useNavigate(); 

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Horizontal sliding carousel */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="flex h-full transition-transform duration-1000"
          style={{
            width: `${backgroundImages.length * 100}%`,
            transform: `translateX(-${current * (100 / backgroundImages.length)}%)`,
          }}
        >
          {backgroundImages.map((url, i) => (
            <div
              key={i}
              className="h-full w-full flex-shrink-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${url})`,
                width: `${100 / backgroundImages.length}%`,
              }}
            />
          ))}
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Responsive flex: row-reverse on lg+ (text right), col on mobile */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center gap-8 lg:gap-12 h-full">
            {/* Texts */}
            <div className="order-1 lg:order-2 text-center lg:text-right space-y-6 w-full lg:w-1/2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="inline-block animate-pulse text-white">F</span>
                <span className="inline-block animate-pulse text-white" style={{ animationDelay: "0.1s" }}>l</span>
                <span className="inline-block animate-pulse text-white" style={{ animationDelay: "0.2s" }}>a</span>
                <span className="inline-block animate-pulse text-white" style={{ animationDelay: "0.3s" }}>v</span>
                <span className="inline-block animate-pulse text-white" style={{ animationDelay: "0.4s" }}>o</span>
                <span className="inline-block animate-pulse text-white" style={{ animationDelay: "0.5s" }}>r</span>
                <span className="inline-block animate-pulse text-orange-500" style={{ animationDelay: "0.6s" }}>F</span>
                <span className="inline-block animate-pulse text-orange-500" style={{ animationDelay: "0.7s" }}>o</span>
                <span className="inline-block animate-pulse text-orange-500" style={{ animationDelay: "0.8s" }}>r</span>
                <span className="inline-block animate-pulse text-orange-500" style={{ animationDelay: "0.9s" }}>g</span>
                <span className="inline-block animate-pulse text-orange-500" style={{ animationDelay: "1s" }}>e</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light">
                Where AI Meets Culinary Magic ✨
              </p>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
                Transform your random ingredients into extraordinary recipes.
                Powered by cutting-edge AI technology, designed for food enthusiasts
                and culinary explorers.
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-sm sm:text-base text-gray-400">🔥 Instant Recipe Generation</p>
                <p className="text-sm sm:text-base text-gray-400">🎯 Smart Ingredient Matching</p>
                <p className="text-sm sm:text-base text-gray-400">⚡ AI-Powered Recommendations</p>
              </div>
            </div>

            {/* Button */}
            <div className="order-2 lg:order-1 flex flex-col justify-center items-center lg:justify-start w-full lg:w-1/2">
              <button 
                className="group relative bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white  font-bold py-4 px-8 rounded text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50"
                onClick={() => navigate('/ask-environment')}
              >
                <span className="flex items-center gap-3">
                  Start Creating Magic
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              {/* about us button */}
              <button className="mt-4 group relative bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-4 px-8 rounded text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50" onClick={onScrollToAbout}>
                <span className="flex items-center gap-3">
                  About Us
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center opacity-70">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Image Progress Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {backgroundImages.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === current ? "w-8 bg-orange-500" : "w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionOne;