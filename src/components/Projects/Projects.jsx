import React from "react";
import "./Projects.css";
import unit5_project from "../../Assets/images/unit5_project.png";
import uboric from "../../Assets/images/uboric.png";
import List from "../../Assets/images/List.png"
import gymwolf from "../../Assets/images/Gymwolf.png"
import { FaReact, FaHardHat } from "react-icons/fa";

import {
  SiChakraui,
  SiHtml5,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
} from "react-icons/si";

export const Projects = () => {
  return (
    <>
      <div className="section" >
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={unit5_project}
                  alt=" nordstrom"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>SkinStore Clone</h2>
              <p>
                SkinStore, Inc. is a leading makeup retailer offering thousand types of beauty care products for  women and kids.

                <p style={{ color: "#80618c", marginTop: "30px" }}>Tech Stack</p>

              </p>

              <div className="projects_techsection">



                <div>
                  <FaReact />
                  <h5>React JS</h5>
                </div>

                <div>
                  <SiChakraui />
                  <h5>Chakra UI</h5>
                </div>
                <div>
                  <SiHtml5 />
                  <h5>HTML</h5>
                </div>

                <div>
                  <SiCss3 />
                  <h5>CSS</h5>
                </div>
                <div>
                  <SiJavascript />
                  <h5>JavaScript</h5>
                </div>

              </div>

              <div>
                <a
                  href="https://skin-store-clone-three.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/stormyvikrant/permissible-jump-1162"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={uboric}
                  alt="Uboric"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Uboric Clone</h2>
              <p>
                Uboric is a e-commerce website which offers luxury cloth from different brands on a great deal

                <p style={{ color: " #80618c", marginTop: "30px", marginBottom: "-10px" }}>Tech Stack</p>

              </p>

              <div className="projects_techsection">
                <div>
                  <FaReact />
                  <h5>React JS</h5>
                </div>
                <div>
                  <SiJavascript />
                  <h5>JavaScript</h5>
                </div>
                <div>
                  <SiHtml5 />
                  <h5>HTML</h5>
                </div>

                <div>
                  <SiCss3 />
                  <h5>CSS</h5>
                </div>

              </div>

              <div>
                <a
                  href="https://priyank-pro.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/priyankfz7/envious-cactus-6437"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={List}
                  alt="List"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>List Web-App Clone</h2>
              <p>
                List Web-App is a ecommerce website which contains all your daily need products like cloth ,grocerry,homedecor E.T.C
                <p style={{ color: " #80618c", marginTop: "15px", marginBottom: "-5px" }}>Tech Stack</p>
              </p>

              <div className="projects_techsection">

                <div>
                  <SiJavascript />
                  <h5>JavaScript</h5>
                </div>

                <div>
                  <SiHtml5 />
                  <h5>HTML</h5>
                </div>

                <div>
                  <SiCss3 />
                  <h5>CSS</h5>
                </div>

              </div>


              <div>
                <a
                  href="https://delightful-meringue-3aac9b.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/priyankfz7/List-Clone/tree/master/project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
};
