"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full flex justify-between items-end mt-4 p-4 px-7 z-10 relative">
      <div className="flex gap-6 text-base text-white/90 font-medium">
        EAZWEB™
      </div>
      <div className="flex gap-6 text-base text-white/90 font-medium">
        <a href="#" className="hover:underline">
          LinkedIn
        </a>
        <a href="#" className="hover:underline">
          Twitter
        </a>
        <a href="#" className="hover:underline">
          X
        </a>
      </div>
      <div className="flex gap-6 text-base text-white/90 font-medium">
        {year}
      </div>
    </div>
  );
}
