import { ChevronRight } from "lucide-react";
import React from "react";

const ProjectCard = ({ name, description, url, imgUrl }) => {
  return (
    <a className="flex border py-8 px-2 rounded-md gap-4 group/item hover:bg-slate-100 hover:text-primary mt-1">
      <img
        src={imgUrl}
        alt={name}
        height="50"
        width="50"
        className="object-contain"
      />
      <div className="flex flex-col flex-grow">
        <p>{name}</p>
        <p className="text-secondary-foreground">{description}</p>
      </div>
      <div>
        <ChevronRight />
      </div>
    </a>
  );
};

export default ProjectCard;
