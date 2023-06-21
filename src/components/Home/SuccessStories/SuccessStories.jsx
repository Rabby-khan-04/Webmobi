import React from "react";
import "./SuccessStories.css";

const SuccessStories = () => {
  return (
    <section className="xl:pt-32 lg:pt-24 pt-20 xl:pb-52 lg:pb-36 pb-20 stories-sections">
      <div className="container">
        <div className="text-center text-white max-w-5xl mx-auto">
          <h2 className="lg:text-6xl sm:text-5xl text-4xl lg:mb-12 md:mb-8 sm:mb-6 mb-4 font-semibold">
            Success Stories
          </h2>
          <p className="lg:text-3xl sm:text-2xl text-xl">
            Over the years, we have helped numerous startups successfully
            establish their captive development centers. Join the roster of our
            successful collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
