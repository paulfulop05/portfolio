import ProjectCard from "./ProjectCard";
import React from "react";
import Magnet from "../Magnet";

import obstrutionImage from "../../assets/projects/Obstruction.png";
import obstrutionGif from "../../assets/projects/test.gif";

const projects = [
  {
    title: "Project 1",
    description: "Example 1 in one sentence bla ble blu.",
    imagePath: obstrutionImage,
    gifPath: obstrutionGif,
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
    description: "Example 2 in one sentence bla ble blu.",
    imagePath: obstrutionImage,
    gifPath: obstrutionGif,
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
    description: "Example 3 in one sentence bla ble blu.",
    imagePath: obstrutionImage,
    gifPath: obstrutionGif,
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
  {
    title: "Project 4",
    description: "Example 4 in one sentence bla ble blu.",
    imagePath: obstrutionImage,
    gifPath: obstrutionGif,
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
  {
    title: "Project 5",
    description: "Example 5 in one sentence bla ble blu.",
    imagePath: obstrutionImage,
    gifPath: obstrutionGif,
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
    <div className="w-full flex justify-center">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl px-4 justify-items-center"
        style={{
          columnGap: "230px",
          rowGap: "65px",
        }}
      >
        {projects.map((project, index) => (
          <Magnet padding={50} disabled={false} magnetStrength={50}>
            <ProjectCard
              key={index}
              projectTitle={project.title}
              projectDescription={project.description}
              projectImagePath={project.imagePath}
              projectGifPath={project.gifPath}
              technologiesUsed={project.technologies}
              githubUrl={project.githubUrl}
            />
          </Magnet>
        ))}
      </div>
    </div>
  );
};
