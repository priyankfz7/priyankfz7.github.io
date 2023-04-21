import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {/* <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
         
        /> */}
        <Card
          title="Web Development"
          des="I specialize in developing fast and responsive websites that provide a seamless user experience across all devices, ensuring maximum engagement and satisfaction for your users."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Using Next.js, I can optimize your website's performance and speed, which is a critical factor in search engine ranking algorithms, to ensure that your site ranks higher and is more visible to potential customers"
          icon={<SiProgress />}
        />

        <Card
          title="Hosting Websites"
          des="I offer reliable and secure website hosting solutions that guarantee maximum uptime and fast loading speeds, ensuring that your website is always available and accessible to your customers."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
