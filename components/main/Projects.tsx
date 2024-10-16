import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {/* Project Cards */}
        <ProjectCard
          src="/masterdiskon.png"
          title="Masterdiskon"
          description="A platform that provides various attractive promos for travel and vacations, with exclusive offers for flight tickets, hotels, and tour packages."
          link="/project?masterdiskon"
        />
        <ProjectCard
          src="/jajaauto.png"
          title="Jaja Auto"
          description="A platform that provides vehicle financing services with a fast and easy process, offering a variety of flexible car credit options."
          link="/project?jajaauto"
        />
        <ProjectCard
          src="/elogs.png"
          title="Eureka Logistics"
          description="A logistics service provider that offers fast, safe, and reliable shipping solutions, backed by a wide network and advanced technology."
          link="/project?elogs"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-5">
        {/* Project Cards */}
        <ProjectCard
          src="/jajaid.png"
          title="Jaja ID"
          description="Innovative platform that offers a variety of solutions for financial transaction and e-commerce needs. With a user-friendly interface."
          link="/project?jajaid"
        />
        <ProjectCard
          src="/eurekabookhouse.png"
          title="Eureka Bookhouse"
          description="Online bookstore that provides a diverse collection of quality books, ranging from fiction, non-fiction, to children's books."
          link="/project?eurekabookhouse"
        />
        <ProjectCard
          src="/siplah.png"
          title="Siplah Eureka Bookhouse"
          description="platform providing book and educational equipment procurement services that make it easier for schools and educational institutions."
          link="/project?siplah"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-5">
        {/* Project Cards */}
        <ProjectCard
          src="/ui-1.png"
          title="UI UX Movie"
          description="The application display is designed with a modern interface to provide the best movie watching experience."
          link="/project?uiux-movie"
        />
        <ProjectCard
          src="/ui-2.png"
          title="UI UX CarShop"
          description="A modern and easy car shopping experience. With a clean UI/UX design, users can quickly find their dream car."
          link="/project?uiux-carshop"
        />
        <ProjectCard
          src="/ui-3.png"
          title="UI UX Clinic"
          description="Make it easier for patients to access health services. Make appointments, online consultations, and view medical history."
          link="/project?uiux-movie"
        />
        <ProjectCard
          src="/ui-4.png"
          title="UI UX Food Order"
          description="platform providing book and educational equipment procurement services that make it easier for schools and educational institutions"
          link="/project?uiux-movie"
        />
      </div>
    </div>
  );
};

export default Projects;