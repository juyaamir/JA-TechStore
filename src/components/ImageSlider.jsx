import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyle = {
    height: '100%',
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
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
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div style={sliderStyle} className='group'>
      <div  onClick={goToNext} className='right-8 arrowStyles'>&gt;</div>
      <div onClick={goToPrevious} className='left-8 arrowStyles'>&lt;</div>
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