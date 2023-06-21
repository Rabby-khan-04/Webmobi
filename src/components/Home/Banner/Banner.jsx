import React from "react";
import "./Banner.css";
import bannerImg from "../../../assets/images/bannerImg.svg";

const Banner = () => {
  return (
    <section className="xl:pt-28 lg:pt-20 pt-16 banner-section">
      <div className="container xl:pb-20 lg:pb-16 sm:pb-12 pb-7 text-center">
        <h2 className="lg:text-8xl sm:text-6xl text-5xl font-bold text-dark mb-5">
          Welcome to <span className="text-deepBlue">Incubyte</span>
        </h2>
        <p className="text-darkGray lg:text-3xl sm:text-2xl text-xl font-medium sm:mb-6 mb-4">
          Building Bridges to success in the tech ecosystem.
        </p>
        <img
          className="max-w-2xl inline-block mx-auto"
          src={bannerImg}
          alt=""
        />
      </div>

      <div className="xl:pt-40 lg:pt-32 pt-16 xl:pb-28 lg:pb-20 pb-16 bg-opacity-80 bg-[#3457bf]">
        <div className="container">
          <h3 className="lg:text-6xl sm:text-5xl text-4xl text-white font-bold lg:mb-12 md:mb-8 sm:mb-6 mb-4">
            About Us
          </h3>
          <p className="lg:text-4xl sm:text-3xl text-2xl text-white">
            With over 3 years of experience, we at Incubyte specialize in
            setting up captive development centers for growing startups,
            addressing key challenges and providing tailor-made solutions for
            your business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
