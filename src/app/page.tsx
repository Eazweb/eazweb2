// src/app/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { projects, Project } from "@/lib/projects";
import BackgroundLayer from "@/components/BackgroundLayer";
import MiddleLayerWrapper from "@/components/MiddleLayerWrapper";
import ProjectList from "@/components/ProjectList";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <main className="relative h-screen w-full overflow-hidden text-white">
      {/* Preload all project images */}
      <div style={{ display: "none" }}>
        {projects.map((p) => (
          <div key={p.id}>
            <Image src={p.bgImage} alt="" width={1920} height={1080} priority />
            <Image
              src={p.smallImage}
              alt=""
              width={500}
              height={500}
              priority
            />
          </div>
        ))}
      </div>
      <BackgroundLayer project={hoveredProject} />
      <MiddleLayerWrapper project={hoveredProject} />

      <div className="relative z-10 flex h-full flex-col p-4 sm:p-8">
        {/* Header */}
        <header className="flex w-full items-center justify-between">
          {/* Left Section: Menu on large, EAZWEB on small */}
          <div className="flex flex-1 justify-start">
            <button className="hidden rounded-full border-2 border-white px-4 py-2 text-sm text-white sm:block">
              Menu
            </button>
            <div className="text-2xl font-bold tracking-widest sm:hidden ">
              EAZWEB
            </div>
          </div>

          {/* Middle Section: EAZWEB on large, hidden on small */}
          <div className="flex flex-1 justify-center">
            <div className="hidden text-2xl font-bold tracking-widest sm:block">
              EAZWEB
            </div>
          </div>

          {/* Right Section: Contact on large, Menu on smalljjjjj */}
          <div className="flex flex-1 justify-end">
            <button className="hidden rounded-full border-2 border-white px-4 py-2 text-sm text-white sm:block" onClick={() => router.push("/contact")}>
              Contact
            </button>
            <button className="rounded-full border-2 border-white px-4 py-2 text-sm text-white sm:hidden">
              Menu
            </button>
          </div>
        </header>

        {/* Main Content: Project List */}
        <div className="flex flex-1 items-center justify-start">
          <ProjectList
            onProjectHover={setHoveredProject}
            hoveredProject={hoveredProject}
          />
        </div>
      </div>
    </main>
  );
}
