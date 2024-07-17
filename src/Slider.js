import React, { useState } from 'react';
import Slide from './Slide';
import './Slider.css';

const Slider = ({ numSlides, fullWidth, showArrows, showDots, showThumbnails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = Array.from({ length: numSlides }, (_, index) => (
    <Slide key={index} index={index} />
  ));

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? numSlides - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === numSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`slider ${fullWidth ? 'full-width' : 'container'}`}>
      {showArrows && (
        <>
          <button className="arrow left-arrow" onClick={handlePrevClick}>←</button>
          <button className="arrow right-arrow" onClick={handleNextClick}>→</button>
        </>
      )}
      <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides}
      </div>
      {showDots && (
        <div className="dots">
          {Array.from({ length: numSlides }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      )}
      {showThumbnails && (
        <div className="thumbnails">
          {Array.from({ length: numSlides }).map((_, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/150?text=Slide+${index + 1}`}
              alt={`Thumbnail ${index + 1}`}
              className={currentIndex === index ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
