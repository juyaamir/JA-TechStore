import Footer from './Footer'
import Header from './Header'
import ImageSlider from './ImageSlider'
import { useTheme } from '../Context'
import AppRoutes from '../routes/AppRoutes'



const MainLayout = () => {
  const {theme} = useTheme();
  return (
    <div className='flex flex-col min-h-screen' style={{color: theme === 'light' ? '#333' : '#E0E0E0', backgroundColor: theme === 'light' ? '#F7F7F7' : '#1A1A1A'}}>
        <Header />
        <main className='flex-grow mx-auto'>
          <AppRoutes />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout