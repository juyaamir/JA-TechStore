import Footer from './Footer'
import Header from './Header'
import ImageSlider from './ImageSlider'
import { useTheme } from '../Context'


import image1 from '../images/image-1.jpg'
import image4 from '../images/image-4.jpg'
import image6 from '../images/image-6.avif'
import image7 from '../images/image-7.avif'
import image8 from '../images/image-8.jpg'
const images = [image1, image4, image6, image7, image8];
const MainLayout = () => {
  const {theme} = useTheme();
  return (
    <div className='flex flex-col min-h-screen' style={{color: theme === 'light' ? '#333' : '#E0E0E0', backgroundColor: theme === 'light' ? '#F7F7F7' : '#1A1A1A'}}>
        <Header />
        <main className='flex-grow mx-auto'>
          <div className='homeSliderStyles'>
            <ImageSlider images={images} />
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout