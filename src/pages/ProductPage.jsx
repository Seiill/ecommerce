import React from 'react'
import Annoucement from '../components/annoucement/Annoucement'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import ProductList from '../components/ProductList/ProductList'
import Products from '../components/products/Products'



const ProductPage= ({item}) => {
  return (
    <>
     <Annoucement/>
    <Navbar />
    <ProductList />
    <Products />
    <Newsletter/>
    <Footer />
    </>
    
  )
}

export default ProductPage