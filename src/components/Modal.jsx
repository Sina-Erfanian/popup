import "./Modal.css";
import { Navigation, Pagination, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { React } from "react";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import { Link } from "react-router-dom";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <div className="btn-container" onClick={() => swiper.slideNext()}>
      <button className="btn-next">Next</button>
    </div>
  );
};

const Modal = () => {
  const [style, setStyle] = useState(false);
  return (
    <div
      className="wrapper-modal"
      style={{
        width: style ? "40vw" : "70vw",
        background: style
          ? "linear-gradient(90deg, rgba(54,170,155,0.7987570028011204) 43%, rgba(0,212,255,1) 100%)"
          : null,
          maxHeight : style ? "400px" : null 
      }}
    >
      <Swiper
        className="swiper-modal"
        modules={[Navigation, Pagination, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="slides">
            <div className="content">
              <h1 className="title-modal">Modern React</h1>
              <p className="p-modal">
                Master React and Redux with React Router, Webpack, and
                Create-React-App. Includes Hooks!
              </p>
              <SwiperButtonNext />
            </div>
            <div className="video-wrapper">
              <video
                className="video"
                controls
                autoPlay
                src={require("../media/Modern React with Redux Training Course.mp4")}
              ></video>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides">
            <div className="content">
              <h1 className="title-modal">Master Laravel 8</h1>
              <p className="p-modal">
                Get from zero to proficiency in the Laravel Framework! Course
                for beginners and intermediate students!
              </p>
              <SwiperButtonNext />
            </div>
            <div className="video-wrapper">
              <video
                className="video"
                controls
                autoPlay
                src={require("../media/Mastering Laravel PHP for Beginners and Intermediate.mp4")}
              ></video>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides">
            <div className="content">
              <h1 className="title-modal">JavaScript Course 2022</h1>
              <p className="p-modal">
                The modern JavaScript course for everyone! Master JavaScript
                with projects, challenges and theory. Many courses in one!
              </p>
              <SwiperButtonNext />
            </div>
            <div className="video-wrapper">
              <video
                className="video"
                controls
                autoPlay
                src={require("../media/Learn Modern Javascript (Build and Test Apps) - Full Course.mp4")}
              ></video>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="last-slide">
              <h2 className="title-course">Udemy Courses</h2>
              <p className="p-course">
                Udemy, Inc. is a for-profit massive open online course provider
                aimed at professional adults and students. It was founded in May
                2010 by Eren Bali, Gagan Biyani, and Oktay Caglar
              </p>
              <Link to="/about" target="_blank" className="link-external">
                Udemy
              </Link>

              {isActive ? setStyle(true) : setStyle(false)}
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Modal;
