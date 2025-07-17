import { CaseStudy } from "@/components/CaseStudy";
import { projects } from "./config";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: any) {
  const { project_name } = params;
  const projectData = projects[project_name];

  if (!projectData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <CaseStudy props={projectData} />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(projects).map((project_name) => ({
    project_name,
  }));
}
