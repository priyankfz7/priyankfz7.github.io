import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import resume from "../../Assets/pdf/Priyank_Gupta_Resume.pdf";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  const handleresume = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={"priyankfz7.png"} alt="om" w="400px" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi, I am <span className="different">Priyank Gupta </span>{" "}
                from <span className="different">Sambhal, Uttar Pradesh.</span>
                I have done 3 yrs diploma in civil engineering, and I love to exploring new
                technologies in the field of Web Development and always try to
                adapt to it. I believe in the concept of continuous learning by
                regularly upgrading my skills and enhancing my knowledge. I have
                learned MERN stack, Data Structures Algorithms, and soft skills
                at Masai School. As a developer, my hunger for learning has
                drastically increased. And I want to centralize my skills and
                learning for enhancement of an organization and more of it, to
                enhance my career."
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Badminton & Cricket{" "}
              </h4>

              <button
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  width: "8rem",
                  padding: "0.8rem",
                  backgroundColor: " #80618c",
                }}
              >
                <a
                  href={resume}
                  // onClick={toggleNavList}
                  // className="link link--nav"
                  download="Priyank Gupta - Resume"
                // target="_blank"
                // rel="noreferrer"
                >
                  <button
                    style={{ backgroundColor: " #80618c", color: "white" }}
                    onClick={() => handleresume(resume)}
                  >
                    Resume
                  </button>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
