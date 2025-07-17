"use client";

import { CaseStudy } from "@/components/CaseStudy";

export default function DummyCaseStudyPage() {
  const caseStudyData = {
    name: "Sleek Studio",
    description:
      "A complete transformation of a personal portfolio website, focusing on modern design principles and enhanced user experience. The project involved extensive research into modern design trends, user experience optimization, and performance improvements.",
    overview:
      "Our team was tasked with redesigning a personal portfolio website to better showcase the client's work and skills. The project involved extensive research into modern design trends, user experience optimization, and performance improvements. We implemented a responsive design that works seamlessly across all devices while maintaining the client's unique brand identity.",
    testimonialText:
      "The team delivered an exceptional portfolio website that perfectly captures my style and showcases my work beautifully. The attention to detail and user experience is outstanding.",
    images: [
      "/projectimages/sleekstudio/herobg.jpeg",
      "/projectimages/luxx/herobg.jpg",
      "/projectimages/switchfixx/herobg.jpg",
      "/projectimages/portfolio/herobg.png",
    ],
    result: "300%",
    resultType: "Increase in Portfolio Views",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <CaseStudy props={caseStudyData} />
    </div>
  );
}

