import React, { Children } from 'react'
import Footer from './Footer'
import Header from './Header'


const MainLayout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow mx-auto p-4'>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout