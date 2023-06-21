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
    <section className="pt-14 pb-24">
      <div className="container">
        <div className="intro text-center mb-12">
          <h2 className="text-darkBlue text-6xl font-bold">Our Experties</h2>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {experties.map((exp, index) => (
            <ExpertiesCard exp={exp} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experties;
