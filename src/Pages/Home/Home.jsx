import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import Experties from "../../components/Home/Experties/Experties";
import SuccessStories from "../../components/Home/SuccessStories/SuccessStories";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Experties */}
      <Experties />
      {/* Success Stories */}
      <SuccessStories />
    </>
  );
};

export default Home;
