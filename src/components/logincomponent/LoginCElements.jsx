import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.5)), url("https://images.pexels.com/photos/12944657/pexels-photo-12944657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
display: flex;
align-items: center;
justify-content: center;
`
export const Wrapper  = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width: "75%"})}
    
`
export const Title = styled.h1`
    font-style: 21px;
    font-weight: 300;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding:10px;     
`
export const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
export const Link = styled.a`
margin: 5px 0px;
font-style: 12px;
text-decoration: underline;
cursor: pointer;
`