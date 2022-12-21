import React from 'react'
import { Container, Wrapper, Form, Title, Input, Button, Link } from './LoginCElements'

const LoginC = () => {
  return (
    <Container>
    <Wrapper>
        <Form>
        <Title>SIGN IN</Title>
        <Input placeholder='username'></Input>
        <Input placeholder='password'></Input>
        <Button>LOGIN</Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default LoginC