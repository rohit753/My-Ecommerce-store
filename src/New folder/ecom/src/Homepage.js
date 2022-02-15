import React from 'react'
import Announcment from './Components/Announcment'
import Categories from './Components/Categories'
import Navbar from './Components/Navbar'
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
      <Products/>
    </div>
  )
}

export default Homepage