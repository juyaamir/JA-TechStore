import React from 'react'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import Signup from '../pages/SignupPage'
import HomePage from '../pages/homePage'
import { Routes, Route } from 'react-router-dom'
import CartPage from '../pages/cartPage'
import FavoritePage from '../pages/FavoritePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<HomePage />} />
      <Route path= '/login' element = {<LoginPage />} />
      <Route path = '/signup' element = {<Signup />} />
      <Route path='*' element = {<NotFoundPage />} />
      <Route path = '/cart' element = {<CartPage />} />
      <Route path = '/favorite' element = {<FavoritePage />} />
    </Routes>
  )
}

export default AppRoutes