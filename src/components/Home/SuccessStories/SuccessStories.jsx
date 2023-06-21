import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SuccessStories.css";

const SuccessStories = () => {
  const stories = [
    "Over the years, we have helped numerous startups successfully establish their captive development centers. Join the roster of oursuccessful collaborations.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quisquam eaque numquam velit accusamus, facere sequi quidem esse tempora, rerum quos consequuntur est id eveniet magni voluptatibus ullam unde ipsam!",
    "Over the years, we have helped numerous startups successfully establish their captive development centers. Join the roster of oursuccessful collaborations.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quisquam eaque numquam velit accusamus, facere sequi quidem esse tempora, rerum quos consequuntur est id eveniet magni voluptatibus ullam unde ipsam!",
    "Over the years, we have helped numerous startups successfully establish their captive development centers. Join the roster of oursuccessful collaborations.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quisquam eaque numquam velit accusamus, facere sequi quidem esse tempora, rerum quos consequuntur est id eveniet magni voluptatibus ullam unde ipsam!",
    "Over the years, we have helped numerous startups successfully establish their captive development centers. Join the roster of oursuccessful collaborations.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quisquam eaque numquam velit accusamus, facere sequi quidem esse tempora, rerum quos consequuntur est id eveniet magni voluptatibus ullam unde ipsam!",
  ];

  return (
    <section className="xl:pt-32 lg:pt-24 pt-20 xl:pb-52 lg:pb-36 pb-20 stories-sections">
      <div className="container">
        <div className="text-center text-white max-w-5xl mx-auto">
          <h2 className="lg:text-6xl sm:text-5xl text-4xl lg:mb-12 md:mb-8 sm:mb-6 mb-4 font-semibold">
            Success Stories
          </h2>

          <Swiper
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={index}>
                <p className="lg:text-3xl sm:text-2xl text-x px-5">{story}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
