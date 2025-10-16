import { useState, useEffect } from "react";

const Opening = ({ onLoadComplete }) => {
  const [showRotation, setShowRotation] = useState(true);
  const [showCurtain, setShowCurtain] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Step 1: Show rotation for 3s
    const rotationTimer = setTimeout(() => {
      setShowRotation(false);
      setShowCurtain(true);

      // Step 2: Curtain stays closed for 1s
      setTimeout(() => {
        setCurtainOpen(true); // Open curtain

        // Step 3: After 1s of curtain opening, fade out overlay
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            if (onLoadComplete) onLoadComplete();
          }, 700);
        }, 1000);
      }, 1000);
    }, 3000);

    return () => clearTimeout(rotationTimer);
  }, [onLoadComplete]);

  const items = ["🍳", "🔪", "🍴", "🥄", "🍕", "🥗", "🍜", "🍔"];

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] transition-opacity duration-700 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ background: showRotation ? "#09090b" : "transparent" }}
      >
        {/* Rotation animation */}
        {showRotation && (
          <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {items.map((icon, i) => (
                <div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    animation: `orbit 4s linear infinite`,
                    animationDelay: `-${i * 0.5}s`,
                    filter: "grayscale(1) brightness(2)",
                  }}
                >
                  {icon}
                </div>
              ))}
              <div className="absolute flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-lg shadow-2xl flex items-center justify-center animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-zinc-900 rounded-full"></div>
                    <div className="w-1 h-1 bg-zinc-900 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Curtain overlay */}
        {showCurtain && (
          <div
            className="absolute inset-0 z-[9999]"
            style={{ perspective: "2000px" }}
          >
            {/* Left curtain */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-800 shadow-2xl transition-all duration-1000 ease-in-out"
              style={{
                transformOrigin: "left center",
                transform: curtainOpen
                  ? "translateX(-100%) rotateY(-45deg) scale(0.8)"
                  : "translateX(0) rotateY(0deg) scale(1)",
              }}
            />
            {/* Right curtain */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-950 via-zinc-900 to-zinc-800 shadow-2xl transition-all duration-1000 ease-in-out"
              style={{
                transformOrigin: "right center",
                transform: curtainOpen
                  ? "translateX(100%) rotateY(45deg) scale(0.8)"
                  : "translateX(0) rotateY(0deg) scale(1)",
              }}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Opening;
