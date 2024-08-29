import React, { Children } from 'react'
import Footer from './Footer'
import Header from './Header'
import ImageSlider from './ImageSlider'

import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'
import image3 from '../images/image-3.jpg'
import image4 from '../images/image-4.jpg'
import image5 from '../images/image-5.jpg'
const images = [image1, image2, image3, image4, image5];
const MainLayout = () => {
  const containerStyle = {
    width: '1200px',
    height: '380px',
    margin: '0 auto',
  }
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow mx-auto p-4'>
          <div style={containerStyle}>
            <ImageSlider images={images} />
            
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout