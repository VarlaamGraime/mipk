import {React, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import artBoard from '../assets/Artboard.png'
import style from '../Styles/Style.css'
import arrowL from '../assets/arrowLeft.png'
import arrowR from '../assets/arrowRight.png'


const CompSlider = () => {
 
  

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      appendDots: (dots) => (
      <div className='dotsBox'>
        <div  className="custom-dots-container">
          <ul  className="custom-dots">{dots}</ul>
        </div>
      </div>
    ),
  };

 
 
  
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="customPrevArrow" onClick={onClick}>
        <img src={arrowL } />
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="customNextArrow" onClick={onClick}>
        <img src={arrowR }/>
      </button>
    );
  }
    return (
      <div>
        
          <Slider {...settings}>
            <div>
              <img src={artBoard} alt="Image 1" />
              <button className='buttonSlide'>Подробнее</button>
            </div>
            <div>
              <img src={artBoard} alt="Image 2" />
            </div>
            <div>
              <img src={artBoard} alt="Image 3" />
            </div>
            <div>
              <img src={artBoard} alt="Image 4" />
            </div>
          </Slider>
            
        </div>
    );
};

export default CompSlider;