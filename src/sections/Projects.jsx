import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Code Brackets",
    description:
      "Write and Preview your HTML, CSS, Javascript code in the browser.",
    url: "https://code-brackets.vercel.app/",
    imgUrl:
      "https://cdn0.iconfinder.com/data/icons/website-design-4/468/Lcd_With_Coding_icons-512.png",
  },
  {
    name: "SearXYZ",
    description: "Paste your query and get answers immediately.",
    url: "https://searxyz.netlify.app/",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/6509/6509907.png",
  },
  {
    name: "CheckWallet",
    description: "Track your expenses, take control over your spending.",
    url: "https://checkwallet.cyclic.app/",
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/000/350/068/original/vector-wallet-icon.jpg",
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
