import React from 'react'
import { popularProducts } from '../../data'
import Product from './Product'
import { Container } from './ProductsElements'

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
        <Product item={item} key= {item.id}c/>
        ))}
    </Container>
  )
}

export default Products