import { Facebook, GitHub, Instagram, LinkedIn } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
    display: flex;
    /* justify-content: space-between; */
`
const SocialIcon=styled.div`
   width: 40px; 
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color:#${props => props.color} ;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 30px;
   cursor: pointer;
   

`

const Center = styled.div`
flex:1;
padding: 20px;
`

const Title=styled.h3`
    
    
`

const List=styled.ul`
    
`

const ListItem=styled.li`
    

`

const Right = styled.div`
flex:1;
padding: 20px;
`

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo> Rohit </Logo>
              <Desc>
                I am an aspiring Fullstack devloper, This is a demo website build by me in 6 days, Tech Stack used is MERN, I am fond of experimenting and creating new things, you can get in touch with me using one of my social media links, Thanks for visiting and if you have any query or feedback I will be more than happy to discuss. 
              </Desc>   
              <SocialContainer>
                  <SocialIcon color="616161">
                      <GitHub/>
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <LinkedIn/>
                  </SocialIcon>
                  <SocialIcon color="E4405f">
                      <Instagram/>
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Facebook/>
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
           <Title> Useful Links</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Man Fashion</ListItem>
                  <ListItem>Woman Fashin</ListItem>
                  <ListItem>Accessories</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Terms</ListItem>
              </List>
          </Center>
          <Right></Right>

    </Container>
  )
}

export default Footer