import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import Experties from "../../components/Home/Experties/Experties";
import SuccessStories from "../../components/Home/SuccessStories/SuccessStories";
import CAT from "../../components/Home/CAT/CAT";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Experties */}
      <Experties />
      {/* Success Stories */}
      <SuccessStories />
      {/* Call To Action */}
      <CAT />
    </>
  );
};

export default Home;
