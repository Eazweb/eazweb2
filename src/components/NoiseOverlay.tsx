export default function NoiseOverlay({
  className = "",
  opacity = "opacity-10",
  blendMode = "mix-blend-soft-light",
  zIndex = "z-50",
}) {
  const url = "/images/otis-redding.png";
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-[url(${url})] bg-repeat ${blendMode} ${opacity} ${zIndex} ${className}`}
    />
  );
}
