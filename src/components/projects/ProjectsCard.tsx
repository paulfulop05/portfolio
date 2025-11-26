import ProjectCard from "./ProjectCard";
import React from "react";

import obstrutionImage from "../../assets/projects/Obstruction.png";

const projects = [
  {
    title: "Project 1",
    description:
      "A comprehensive full-stack application built with modern technologies. Features include user authentication, real-time updates, and responsive design.",
    imagePath: obstrutionImage,
    technologies: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        alt: "React",
        name: "React",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "TypeScript",
        name: "TypeScript",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        alt: "Node.js",
        name: "Node.js",
      },
    ],
    githubUrl: "https://github.com/paulfulop05",
  },
  {
    title: "Project 2",
    description:
      "An innovative solution for data visualization and analytics. Provides interactive charts and real-time data processing capabilities.",
    imagePath: obstrutionImage,
    technologies: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        alt: "Python",
        name: "Python",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
        name: "JavaScript",
      },
    ],
    githubUrl: "https://github.com/paulfulop05",
  },
  {
    title: "Project 3",
    description:
      "A powerful API service with comprehensive documentation. Built with scalability and performance in mind.",
    imagePath: obstrutionImage,
    technologies: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        alt: "Node.js",
        name: "Node.js",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        alt: "Express",
        name: "Express",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        alt: "MongoDB",
        name: "MongoDB",
      },
    ],
    githubUrl: "https://github.com/paulfulop05",
  },
];

export const ProjectsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project.title}
          projectDescription={project.description}
          projectImagePath={project.imagePath}
          technologiesUsed={project.technologies}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
};
