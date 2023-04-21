import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  unit5,
  unit6,
  list,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Personal Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SkinStore Clone"
          des="SkinStore, Inc. is a leading makeup retailer offering thousand
                types of beauty care products for women and kids."
          src={unit5}
          ts={["HTML", "CSS", "JS", "React", "Redux", "Chakra UI"]}
          github="https://github.com/stormyvikrant/permissible-jump-1162"
          live="https://skin-store-clone-three.vercel.app/"
        />
        <ProjectsCard
          title="Shop Karo Clone"
          des="Shop Karo.com is an e-commerce website which offerse clothing
                products for mens and women inspired by paytm-mall."
          src={unit6}
          github="https://github.com/priyankfz7/ShopKaro_Clone"
          live="https://shop-karo-clone.vercel.app"
          ts={[
            "HTML",
            "CSS",
            "JS",
            "React",
            "Redux",
            "Node",
            "Mongodb",
            "Chakra UI",
          ]}
        />
        <ProjectsCard
          title="List Web-App Clone"
          des="List Web-App is a complete clothing solution for men and women."
          src={list}
          github="https://github.com/priyankfz7/List-Clone/tree/master/project"
          live="https://delightful-meringue-3aac9b.netlify.app"
          ts={["HTML", "CSS", "JS"]}
        />
      </div>
    </section>
  );
};

export default Projects;
