import styled from 'styled-components';
import { mobile } from '../../responsive';
export const Container = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({height: "50px"})}
`
export const Wrapper= styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content:space-between;
/*   align-items: center; */
  ${mobile({padding: "10px 0px"})}
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
export const Lenguage = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}
`


export const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`

export const Center = styled.div`
flex: 1;
align-items: center;
text-align: center;
`
export const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSizw: "24px"})}
`

   
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center"})}
    
`
export const SearchContainer = styled.div`
border: .5px solid black;
display: flex;
justify-content: space-between;
align-items:center;
margin-left: 25px;
padding: 5px;   
`
export const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft: "10px"})}
`