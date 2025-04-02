import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projects = [
  {
    src: "/elogs.png",
    title: "Elogs & Race",
    description: "A logistics service provider that offers fast, safe, and reliable shipping solutions, backed by a wide network and advanced technology.",
    link: "/project/elogs-race"
  },
  {
    src: "/jajaid.png",
    title: "Jaja ID",
    description: "Innovative platform that offers a variety of solutions for financial transaction and e-commerce needs. With a user-friendly interface.",
    link: "/project/jajaid"
  },
  {
    src: "/masterdiskon.png",
    title: "Masterdiskon",
    description: "A platform that provides various attractive promos for travel and vacations, with exclusive offers for flight tickets, hotels, and tour packages.",
    link: "/project/masterdiskon"
  },
  {
    src: "/jajaauto.png",
    title: "Jaja Auto",
    description: "A platform that provides vehicle financing services with a fast and easy process, offering a variety of flexible car credit options.",
    link: "/project/jajaauto"
  },
  {
    src: "/mockup-uiux.png",
    title: "UI UX Mobile Designer",
    description: "Designing intuitive and visually appealing mobile interfaces to enhance user experience and engagement.",
    link: "/project/uiux-design"
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 pt-0" id="projects">
      <h1 className="text-[30px] text-white font-bold text-center mb-[15px]">
        My
        <span className="text-transparent ml-[6px] bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
          Project
        </span>
      </h1>
      <small className='text-[14px] md:text-[16px] text-gray-200 mb-[20px] text-center px-10 md:px-20'>
        Through various projects, I have developed interactive web applications and efficient backend APIs. From e-commerce platforms to data management systems, each project strengthened my understanding in full-stack architecture and API integration, ensuring scalable and easy-to-use solutions.
      </small>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pt-5">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-5">
        {projects.slice(2, 4).map((project, index) => (
          <ProjectCard
            key={index + 3}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <div className="h-full w-full md:flex-row gap-10 px-10 mt-5">
        {projects.slice(4).map((project, index) => (
          <ProjectCard
            key={index + 5}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;