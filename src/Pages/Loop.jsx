import React, { useEffect, useRef } from "react";

const Loop = () => {
  const cubeRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const cube = cubeRef.current;

    const animate = () => {
      angle += 1;
      cube.style.transform = `rotateX(${angle}deg) rotateY(${angle}deg)`;
      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-[45%] left-[48%] bg-transparent  perspective-500 bg-black">
      <div
        ref={cubeRef}
        className="w-32 h-32 relative transform-style-preserve-3d bg-amber-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        {["front", "back", "right", "left", "top", "bottom"].map((face) => (
          <div
            key={face}
            className={`absolute w-32 h-32 bg-blue-500 border-2 border-white opacity-90`}
            style={{
              transform: getFaceTransform(face),
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Helper to position cube faces in 3D space
function getFaceTransform(face) {
  const size = 256; // 32 * 4 (tailwind units)
  switch (face) {
    case "front":
      return `translateZ(${size / 2}px)`;
    case "back":
      return `rotateY(180deg) translateZ(${size / 2}px)`;
    case "right":
      return `rotateY(90deg) translateZ(${size / 2}px)`;
    case "left":
      return `rotateY(-90deg) translateZ(${size / 2}px)`;
    case "top":
      return `rotateX(90deg) translateZ(${size / 2}px)`;
    case "bottom":
      return `rotateX(-90deg) translateZ(${size / 2}px)`;
    default:
      return "";
  }
}

export default Loop;
