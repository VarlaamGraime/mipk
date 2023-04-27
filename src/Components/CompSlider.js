import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import artBoard from '../assets/Artboard.png'
import style from '../Styles/Style.css'
import arrowL from '../Styles/arrowLeft.png'
import arrowR from '../Styles/arrowRight.png'


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
      <div style={{ marginTop: '20px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
        <div style={{ textAlign: 'center' }}>
          <button >Custom Button 1</button>
          <button >Custom Button 2</button>
          <button >Custom Button 2</button>
          <button >Custom Button 2</button>
            
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