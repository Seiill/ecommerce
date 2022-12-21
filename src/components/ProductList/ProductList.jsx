import React from 'react'
import {FilterContainer, Title, Filter, FilterText, Select, Option} from './ProductListElements'

function ProductList() {
  return (
    <>
    <Title>Dresses</Title>
    <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option> White </Option>
            <Option> Black </Option>
            <Option> Red </Option>
            <Option> Blue </Option>
            <Option> Yellow </Option>
            <Option> Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option> XS </Option>
            <Option> S </Option>
            <Option>M</Option>
            <Option> L</Option>
            <Option> XL</Option>
          </Select>
          
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>Newest</Option>
            <Option> Price (asc) </Option>
            <Option> Black (desc) </Option>
          </Select>
        </Filter>
        
    </FilterContainer>
    </>
    
  )
}

export default ProductList