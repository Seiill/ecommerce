import React from 'react'
import { Container, Wrapper, Title, Form, Input, Agreement, Button, Link } from './RegisterCElements'

const RegisterC = () => {
  return (
    <Container>
        <Wrapper>
            <Form>
            <Title>CREATE AN ACCOUNT</Title>
            <Input placeholder='name'></Input>
            <Input placeholder='last name'></Input>
            <Input placeholder='username'></Input>
            <Input placeholder='email'></Input>
            <Input placeholder='password'></Input>
            <Input placeholder='confirm password'></Input>
            <Agreement>By creatin an account,I consent t the procesing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
            <Button>CREATE</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        
        </Wrapper>
    </Container>
  )
}

export default RegisterC