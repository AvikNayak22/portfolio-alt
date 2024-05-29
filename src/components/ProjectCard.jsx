import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ name, description, url, imgUrl }) => {
  return (
    <a
      className="flex border py-8 px-2 rounded-md gap-4 group/item hover:bg-slate-100 mt-1"
      href={url}
      target="_blank"
    >
      <img
        src={imgUrl}
        alt={name}
        height="50"
        width="50"
        className="object-contain"
      />
      <div className="flex flex-col flex-grow">
        <p className="group-hover/item:text-primary text-xl font-semibold">
          {name}
        </p>
        <p className="text-secondary-foreground">{description}</p>
      </div>
      <div>
        <FaExternalLinkAlt size={18} className="mr-1" />
      </div>
    </a>
  );
};

export default ProjectCard;
