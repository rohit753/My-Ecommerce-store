import React from 'react'
import Announcment from './Components/Announcment'
import Categories from './Components/Categories'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Newsletter from './Components/Newsletter'
import Products from './Components/Products'
import Slider from './Components/Slider'
// import Sliderfc from './Components/Slider'

const Homepage = () => {
  return (
    <div>
        <Announcment/>
        <Navbar/>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer/>
    </div>
  )
}

export default Homepage