import React from "react";

const ExpertiesCard = ({ exp }) => {
  const { title, description } = exp;
  return (
    <div className="xl:py-12 py-8 xl:px-16 md:px-12 px-8 bg-dabyBlue rounded-2xl border-4 border-white shadow-xl">
      <h3 className="text-center md:text-3xl text-2xl font-semibold text-dark md:mb-7 mb-4">
        {title}
      </h3>
      <p className="md:text-2xl text-xl font-normal text-center lg:text-left">
        {description}
      </p>
    </div>
  );
};

export default ExpertiesCard;
