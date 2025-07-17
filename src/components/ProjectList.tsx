// src/components/ProjectList.tsx
'use client';

import { projects, Project } from '@/lib/projects';
import Link from 'next/link';

interface ProjectListProps {
  onProjectHover: (project: Project | null) => void;
  hoveredProject: Project | null; // Pass down the hovered project state
}

const ProjectList = ({ onProjectHover, hoveredProject }: ProjectListProps) => {
  return (
    <ul className="text-left flex flex-col">
      {projects.map((project) => {
        const isHovered = hoveredProject?.id === project.id;
        const baseStyle = "text-2xl cursor-pointer py-2 transition-all ease-out duration-[250ms] text-white";
        const hoveredStyle = "font-bold text-4xl";
        const normalStyle = "font-light";

        return (
          <li
            key={project.id}
            onMouseEnter={() => onProjectHover(project)}
            onMouseLeave={() => onProjectHover(null)}
            className={`${baseStyle} ${isHovered ? hoveredStyle : normalStyle}`}
          >
            <Link href={`/${project.slug}`}>{project.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;