import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image23 from '../images/image-1.jpg';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
    zIndex: 1,
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
    zIndex: 1,
  };

  const slideStyle = {
    height: '100%',
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    borderRadius: '10px',
  };

  const sliderStyle = {
    height: '100%',
    position: 'relative',
  };

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div style={sliderStyle} className='group'>
      <div style={leftArrowStyles} onClick={goToPrevious} className='hidden group-hover:block'>&lt;</div>
      <div style={rightArrowStyles} onClick={goToNext} className='hidden group-hover:block'>&gt;</div>
      <div style={slideStyle}></div>
      <div className='flex justify-center my-2 gap-4'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'} cursor-pointer border border-gray-900 hover:scale-125 transform transition duration-500 ease-in-out`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;