import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
const colors = [
  "#FF7F50",
  "#40E0D0",
  "#FFF8DC",
  "#FEA3AA",
  "#F3E8EA",
  "#ADF802",
  "#B0BF1A",
  "#C2E5D3",
];

const ProjectsCard = ({ title, des, src, github, live, ts = [] }) => {
  return (
    <div className="w-full p-2 xl:px-5 h-auto xl:py-5 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full overflow-hidden rounded-lg">
        <img
          className="w-full  group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href={github} target="_blank">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <BsGithub />
                </span>
              </a>
              <a href={live} target="_blank">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <FaGlobe />
                </span>
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 mb-2">
            {des}
          </p>
          <div className="flex flex-wrap">
            {ts.map((e, i) => (
              <p
                style={{ color: colors[i] }}
                className="mb-2  text-white mr-3 rounded-xl color font-bold }"
              >{`#${e}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
