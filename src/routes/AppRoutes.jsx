import React from 'react'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import Signup from '../pages/SignupPage'
import HomePage from '../pages/homePage'
import { Routes, Route } from 'react-router-dom'
import CartPage from '../pages/cartPage'
import FavoritePage from '../pages/FavoritePage'
import AccountSettingsPage from '../pages/AccountSettingsPage'
import ProfilePage from '../pages/ProfilePage'
import OrderHistoryPage from '../pages/OrderHistoryPage'
import BrowsingHistory from '../pages/BrowsingHistory'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<HomePage />} />
      <Route path= '/login' element = {<LoginPage />} />
      <Route path = '/signup' element = {<Signup />} />
      <Route path = '/cart' element = {<CartPage />} />
      <Route path = '/favorite' element = {<FavoritePage />} />
      <Route path = '/profile/myprofile' element = {<ProfilePage />} />
      <Route path = '/account/settings' element = {<AccountSettingsPage />} />
      <Route path='/orders'  element={<OrderHistoryPage />}/>
      <Route path='/browsing-history' element={<BrowsingHistory />} />
      <Route path='*' element = {<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes