import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Data from "../../utils/slider.json";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="h-wrapper">
      <div className="hero">
        <Swiper>
          <SlideButtons />
          {Data.map((view, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="body">
                  <img src={view.image} alt="" />
                  <div className="words">
                    <motion.div
                      className="an"
                      initial={{ y: "4rem", opacity: 0.7 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", duration: 2.5 }}
                    >
                      <span className="h-word">{view.name}</span>
                      <span className="d-word">{view.detail}</span>
                    </motion.div>
                    <button>{view.button}</button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;

const SlideButtons = () => {
  let swiper = useSwiper();
  return (
    <div className="b-buttons">
      <div className="slidesss" onClick={() => swiper.slidePrev()}>
        <FaAngleLeft />
      </div>
      <div className="slidesss" onClick={() => swiper.slideNext()}>
        <FaAngleRight />
      </div>
    </div>
  );
};
