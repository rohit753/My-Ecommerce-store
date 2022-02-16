// import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.3),#000000) ,url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) center ;
display: flex;
align-items: center;
justify-content: center;
/* background:fit */
`
const Wrapper = styled.div`
width: 30%;
padding: 20px;
border: 1.5px solid white;

`
const Title = styled.h1`
color:white;
font-size: 24px;
font-weight: 500;
margin-left: 15px;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
padding: 10px;
margin: 5px;
`
const Agreement = styled.span`
color: white;
font-size: 12px;
padding: 20px 0px;
margin-left: 5px;
`
const Button = styled.button`
margin-left: 5px;
width: 80%;
border: 1.5px solid white;
padding: 10px 10px;
cursor: pointer;
background-color: #4b4b4b;
font-size: 17px;
color: white;
&:hover{
    background-color: black;
}
`
// 
const Register = () => {
  return (
      <Container>
          <Wrapper>
              <Title>CREATE AN ACCOUNT</Title>
              <Form>
                  <Input placeholder='First Nmae'/>
                  <Input placeholder='Last Nmae'/>
                  <Input placeholder='Email'/>
                  <Input placeholder='Phone Number'/>
                  <Input placeholder='Password'/>
                  <Input placeholder='Confirm Password' />
                  <Agreement>
                      By creating this account, I consent to the processing of my data in accordance with the  <b> PRIVACY POLICY</b> 
                  </Agreement>
                  <Button>
                      Create Account
                  </Button>
                 
              </Form>
          </Wrapper>
    </Container>
  )
}

export default Register