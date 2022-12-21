import React from 'react'
import Annoucement from '../components/annoucement/Annoucement'
import Categories from '../components/categories/Categories'
import Navbar from '../components/navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Products from '../components/products/Products'
import Slider from '../components/slider/Slider'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Annoucement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home