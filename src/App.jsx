import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import ReactDOM from "react-dom";
import AllProducts from './Pages/AllProducts'
import ProductDetails from './Pages/ProductDetails'
import './App.css'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Carts from './Pages/Carts'
import OrderPlaced from './Pages/OrderPlaced'
import CartsStore from './Pages/store/CartsContext'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CartsStore>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<AllProducts />}></Route>
        <Route path='/product/details/:id' element={<ProductDetails />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/carts' element={<Carts />}></Route>
        <Route path='/order-placed' element={<OrderPlaced />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/details/:id' element={<ProductDetails />}></Route>
      
      </Routes></CartsStore>
    </BrowserRouter>
  )
}
export default App