import React from 'react'
import Layout from './Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Services from './pages/Services'
import ProductDetails from './pages/ProductDetails'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/index.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/productDetails/:productId' element={<ProductDetails />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/Contact' element={<ContactUs />} />
      <Route path='/Checkout' element={<Checkout />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)



function App() {

  return (
    <RouterProvider router={Router} />
  )
}

export default App
