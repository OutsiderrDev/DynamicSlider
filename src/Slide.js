import React from 'react';
import './Slide.css';

const Slide = ({ index }) => {
  return (
    <div className="slide">
      <img src={`https://via.placeholder.com/800x400?text=Slide+${index + 1}`} alt={`Slide ${index + 1}`} />
    </div>
  );
};

export default Slide;
