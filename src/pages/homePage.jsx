import React from 'react'
import ImageSlider from '../components/ImageSlider'
import image1 from '../images/image-1.jpg'
import image4 from '../images/image-4.jpg'
import image6 from '../images/image-6.jpg'
import image7 from '../images/image-7.jpg'
import image8 from '../images/image-8.jpg'
const images = [image1, image4, image6, image7, image8];
const HomePage = () => {
  return (
    <div>
      <div className='homeSliderStyles'>
        <ImageSlider images={images} />
      </div>
    </div>
  )
}

export default HomePage