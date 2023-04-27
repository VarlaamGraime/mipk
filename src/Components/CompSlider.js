import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import artBoard from '../assets/Artboard.png'
import style from '../Styles/Style.css'

const CompSlider= () => {

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
  };
  
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="customPrevArrow" onClick={onClick}>
        Prev
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="customNextArrow" onClick={onClick}>
        Next
      </button>
    );
  }
    return (
        <div>
          <Slider {...settings}>
            <div>
              <img src={artBoard} alt="Image 1" />
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