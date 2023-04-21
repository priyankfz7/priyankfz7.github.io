import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2017 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Development"
            subTitle="Masai School ( May-2022 - Present )"
            result="⭐⭐⭐⭐⭐"
            des="I completed a rigorous 1 year full stack web development course from Masai School and gained comprehensive knowledge and hands-on experience in building web applications using modern technologies such as React, Node.js, MongoDB, and Express and mastered good command on data structures and algorithms. In addition to technical skills, I developed valuable soft skills including communication, teamwork, and problem-solving by collaborating with peers and mentors throughout the program."
          />
          <ResumeCard
            title="Diploma In Civil Engineering"
            subTitle="Govt Polytechnic College Chandausi (2018 - 2022)"
            result="A+ Grade"
            des="I have completed my three years diploma in civil engg from govt polytechnic chandausi."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="CIC Chandausi (2017 - 2018)"
            result="84% avg score"
            des="I passed my 12th board examination from UP Board in 2018 with 83% avg score I had Physics, Chemistry and  Maths as my primary subjects."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
