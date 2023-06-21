import React from "react";
import ExpertiesCard from "./ExpertiesCard";
import { key } from "localforage";

const Experties = () => {
  const experties = [
    {
      title: "Hiring",
      description:
        "Leveraging our deep understanding of the talent landscape, we devise effective hiring strategies to attract the best tech professionals.",
    },
    {
      title: "Human Resources Management",
      description:
        "We ensure a healthy and productive work environment by implementing efficient HR practices tailored to the unique needs of your startup.",
    },
    {
      title: "Taxation",
      description:
        "Our team navigates through the complexities of the tax system, ensuring compliance while optimizing financial efficiency.",
    },
    {
      title: "Regulatory Guidance",
      description:
        "We stay abreast of the ever-changing regulatory landscape, providing timely advice to ensure your startup's operations stay within legal boundaries.",
    },
  ];

  return (
    <section className="lg:pt-14 pt-10 lg:pb-24 pb-14">
      <div className="container">
        <div className="intro text-center lg:mb-12 md:mb-8 sm:mb-6 mb-4">
          <h2 className="text-darkBlue lg:text-6xl sm:text-5xl text-4xl font-bold">
            Our Experties
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-7">
          {experties.map((exp, index) => (
            <ExpertiesCard exp={exp} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experties;
