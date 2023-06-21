import React from "react";

const ExpertiesCard = ({ exp }) => {
  const { title, description } = exp;
  return (
    <div className="py-12 px-16 bg-dabyBlue rounded-2xl border-4 border-white shadow-xl">
      <h3 className="text-center text-3xl font-semibold text-dark mb-7">
        {title}
      </h3>
      <p className="text-2xl font-normal">{description}</p>
    </div>
  );
};

export default ExpertiesCard;
