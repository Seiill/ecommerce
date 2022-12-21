import React from 'react'
import Navbar from '../navbar/Navbar'
import Annoucement from '../annoucement/Annoucement'
import Footer from '../footer/Footer'
import { Container, Wrapper, Title, Top, Bottom, TopButton, TopText, TopTexts, Info, Summary, SummaryTitle, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryButton, Product, ProductName, ProductColor,ProductDetail, ProductId,ProductSize, PriceDetail,Details, Image, ProductAmountContainer, ProductAmount, ProductPrice, Hr} from './CartCElements'
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
const CartC = () => {
  return (
    <Container>
        <Navbar/>
        <Annoucement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://images.pexels.com/photos/7441481/pexels-photo-7441481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></Image>
                        <Details>
                            <ProductName><b>Product:</b>JESSIE THUNDER JEANS</ProductName>
                            <ProductId><b>ID:</b>123456789</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size:  </b>XXL</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$70</ProductPrice>
                    </PriceDetail>
                </Product>
            <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></Image>
                        <Details>
                            <ProductName><b>Product:</b>JESSIE THUNDER JEANS</ProductName>
                            <ProductId><b>ID:</b>123456789</ProductId>
                            <ProductColor color='gray'/>
                            <ProductSize><b>Size:  </b>XXL</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>1</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$40</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
               <SummaryButton>CHECKOUT NOW</SummaryButton>
               </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default CartC