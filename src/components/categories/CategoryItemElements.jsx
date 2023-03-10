import styled from "styled-components";

import { mobile } from "../../responsive";
export const Container = styled.div`
  flex:1;
  margin: 0.3rem;
  height: 70vh;
  position: relative;

`
export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    ${mobile({height: "30vh"})}
`
export const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
    
`
export const Title = styled.h1`
    color: white;
    margin-bottom: 1.4rem;
`
export const Button = styled.button`
    border: none;
    padding: 0.8;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 400;
`