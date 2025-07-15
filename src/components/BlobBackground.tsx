import React from "react";

const defaultBlobs = [
  {
    color: "bg-purple-500",
    size: "size-[80vw]",
    position: "top-[-80%] left-[-45%]",
    animation: "blob1",
    opacity: "opacity-20",
    blurStrength: "blur-[400px]",
    animationDuration: "20s",
  },
  {
    color: "bg-violet-500",
    size: "size-[40vw]",
    position: "top-[85%] right-[-10%]",
    animation: "blob2",
    opacity: "opacity-20",
    blurStrength: "blur-[400px]",
    animationDuration: "30s",
  },
  {
    color: "bg-blue-500",
    size: "size-[45vw]",
    position: "top-[-60%] right-[-5%]",
    animation: "blob3",
    opacity: "opacity-20",
    blurStrength: "blur-[200px]",
    animationDuration: "40s",
  },
];

export default function BlobBackground({
  blobs = defaultBlobs,
  blendMode = "mix-blend-screen",
  zIndex = "-z-10",
}) {
  return (
    <>
      <div className={`absolute inset-0 ${zIndex} overflow-hidden`}>
        <div className="relative h-full w-full">
          {blobs.map((blob, idx) => (
            <div
              key={idx}
              className={`absolute rounded-full ${blob.color} ${blob.size} ${blob.position} ${blob.blurStrength} ${blob.opacity} ${blendMode}`}
              style={{
                animation: `${blob.animation} ${blob.animationDuration} ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
