import React from 'react'
import {Container, Wrapper, ImageContainer, Image,InfoContainer,Title,Desc,Price, FilterContainer, Filter, FilterColor,FilterSize,FilterSizeOption,FilterTitle, AddContainer, AmountContainer, Amount, Button} from './ProductElements'
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';

const Product = () => {
  return (
   <Container>
    
    <Wrapper>
        <ImageContainer>
            <Image src='https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Girl sweater" />
        </ImageContainer>
        <InfoContainer>
            <Title>lorem</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ea voluptate? Aspernatur dignissimos consequatur quasi quod doloribus distinctio magnam laborum id repellat cumque expedita, officia ut possimus dolores incidunt modi.
           </Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkBlue" />
                    <FilterColor color="gray" />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
    </Wrapper>
   </Container>
  )
}

export default Product