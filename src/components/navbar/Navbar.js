import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { navLinksdata } from "../../constants";
import { resume } from "../../assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleresume = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <h1 className="text-3xl text-designColor capitalize font-bold">
          {"<Priyank />"}
        </h1>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <h1 className="text-3xl text-designColor capitalize font-bold">
                  {"🙏🙏 Hey !"}
                </h1>
                <p className="text-sm text-gray-400 mt-2">
                  Myself Priyank Gupta, I specialize in building scalable and
                  robust web applications.With expertise in MongoDB, Express.js,
                  React.js, and Node.js, I am able to create web applications
                  that meet the needs of today's users.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://github.com/priyankfz7" target="_blank">
                    <span className="bannerIcon">
                      <FaGithub />
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/priyank-gupta-67a442249/"
                    target="_blank"
                  >
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a href={resume} download="Priyank Gupta - Resume">
                    <span
                      className="bannerIcon"
                      onClick={() => handleresume(resume)}
                    >
                      <span>CV </span>
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
