import React from 'react';
import Search from '@mui/icons-material/Search';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';
import { Container, Left, Right, Center, Wrapper, Lenguage, Input, SearchContainer, Logo, MenuItem  ,Link} from './NavbarElements'



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lenguage>EN</Lenguage>
          <SearchContainer>
            <Input placeholder='Search' />
           <Search style={{Color:"gray", fontSize:"1rem"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>EQUILIBRIUM</Logo>
        </Center>
        <Right>
          <MenuItem to="/Register">REGISTER</MenuItem>
          <MenuItem to="/Login">SING IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
          <Link to="/Cart"><AddShoppingCart /></Link>
          </Badge>
          
          </MenuItem>
        </Right>
      </Wrapper>
    
    </Container>
  )
}

export default Navbar