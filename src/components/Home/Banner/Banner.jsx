import React from "react";
import "./Banner.css";
import bannerImg from "../../../assets/images/bannerImg.svg";

const Banner = () => {
  return (
    <section className="pt-28 banner-section">
      <div className="container pb-20 text-center">
        <h2 className="text-8xl font-bold text-dark mb-5">
          Welcome to <span className="text-deepBlue">Incubyte</span>
        </h2>
        <p className="text-darkGray text-3xl font-medium mb-6">
          Building Bridges to success in the tech ecosystem.
        </p>
        <img
          className="max-w-2xl inline-block mx-auto"
          src={bannerImg}
          alt=""
        />
      </div>

      <div className="pt-40 pb-28 bg-opacity-80 bg-[#3457bf]">
        <div className="container">
          <h3 className="text-6xl text-white font-bold mb-12">About Us</h3>
          <p className="text-4xl text-white">
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
