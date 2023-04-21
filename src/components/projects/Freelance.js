import React from "react";
import Title from "../layouts/Title";
import { fp1, aus } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Freelance = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Explore my previous freelancing projects"
          des="Freelancing Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="BALA Classes Official Website"
          des="Bala Classes is a 15 years old coaching classes for accounts and economics.I built a responsive and user-friendly website using HTML5, CSS3 and  JavaScript also provide them a admin panel ( Made with Node, Mongodb and react ) for uploading study material"
          src={fp1}
          github="https://github.com/priyankfz7/bala-webpage.git"
          live="https://balaclasses.com/"
          ts={["HTML", "CSS", "JS", "Node", "Mongo"]}
        />
        <ProjectsCard
          title="Australia Property Care Website"
          des="Australia Property Care is a Melbourne-based Commercial Building Demolition and Maintenance company.this is my first collaborative freelance project built by the team of 4 members"
          src={aus}
          github="https://github.com/priyankfz7/Australia-Property-Care"
          live="http://australispropertycare.com.au/"
          ts={["HTML", "CSS", "JS"]}
        />
      </div>
    </section>
  );
};

export default Freelance;
