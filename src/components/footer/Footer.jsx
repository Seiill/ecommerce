import React from 'react'
import { Container, Right, Left, Center, Logo, Description, SocialContainer, SocialIcon, Title, List, ListItem, ContactItem, Payment} from './FooterElements'
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import Pinterest from '@mui/icons-material/Pinterest';
import Twitter from '@mui/icons-material/Twitter';
import Room from '@mui/icons-material/Room';
import Phone from '@mui/icons-material/Phone';
import MailOutline from '@mui/icons-material/MailOutline';
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SEIL.</Logo>
            <Description>There are my variations os passages :D kadkjadahdlaadgsadjsajdjsa</Description>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook></Facebook>
                </SocialIcon>
                <SocialIcon color = "E4405F">
                   <Instagram></Instagram>
                </SocialIcon>
                <SocialIcon color = "E60023" >
                   <YouTube></YouTube>
                </SocialIcon>
                <SocialIcon color = "E60023">
                   <Pinterest></Pinterest>
                </SocialIcon>
                <SocialIcon>
                   <Twitter color = "55ACEE"></Twitter>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
           <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>742 Evergreen Terrace, Springfield</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}} />+1 234 56 78</ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}} />contact@seil.dev</ContactItem>
            <Payment src='https://www.navipartner.com/wp-content/uploads/sites/2/2020/08/Mobile-Payments-1.png'></Payment>
        </Right>
        
    </Container>
  )
}

export default Footer