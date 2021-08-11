import menu from "./data";
import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({slides}) => {
   const [current, setCurrent] = useState(0);
 // const someLength = menu.length;

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  if (!Array.isArray(menu) || menu.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="lefty" onClick={prevSlide} />
      <FaArrowAltCircleRight className="righty" onClick={nextSlide} />

      {menu.map((slide, index) => {
        return <img className="gallery" src={slides} alt={menu.title} />;
      })}
    </div>
  );
};

export default ImageSlider;
