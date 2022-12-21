import React from 'react'
import Product from '../components/product/Product'
import Annoucement from '../components/annoucement/Annoucement'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
const ProductSingle = () => {
  return (
    <>
    <Navbar />
    <Annoucement />
    <Product/>
    <Newsletter />
    <Footer />

    </>
    
  )
}

export default ProductSingle