import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Code Brackets",
    description:
      "Write and Preview your HTML, CSS, Javascript code in the browser.",
    url: "https://code-brackets.vercel.app/",
    imgUrl:
      "https://www.logolynx.com/images/logolynx/d2/d2e29e107f28e5cdfc2501a6a2163409.jpeg",
  },
  {
    name: "SearXYZ",
    description: "Paste your query and get answers immediately.",
    url: "https://searxyz.netlify.app/",
    imgUrl:
      "https://www.logolynx.com/images/logolynx/d2/d2e29e107f28e5cdfc2501a6a2163409.jpeg",
  },
  {
    name: "CheckWallet",
    description: "Track your expenses, take control over your spending.",
    url: "https://checkwallet.cyclic.app/",
    imgUrl:
      "https://www.logolynx.com/images/logolynx/d2/d2e29e107f28e5cdfc2501a6a2163409.jpeg",
  },
];

const Projects = () => {
  return (
    <>
      <h1 className="text-3xl text-left font-bold mb-2 ">Recent Projects</h1>
      <ul className="bg-white text-left rounded-xl p-4 ">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              name={project.name}
              description={project.description}
              url={project.url}
              imgUrl={project.imgUrl}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
