import { Facebook, GitHub, Instagram, LinkedIn, MailOutlined, Phone, Room } from '@material-ui/icons'
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
     margin-bottom: 30px;
    
`

const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem=styled.li`
  width  :50% ;
  margin-bottom: 10px;

`

const Right = styled.div`
flex:1;
padding: 20px;
`

const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 60%;
`
const Link = styled.a`
color: white;
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
                     <Link target={'_blank'} href='https://github.com/rohit753'><GitHub /></Link> 
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                  <Link target={'_blank'} href='https://www.linkedin.com/in/rohit-kumar-sahu-/'>  <LinkedIn/></Link> 
                  </SocialIcon>
                  <SocialIcon color="E4405f">
                  <Link target={'_blank'} href='https://www.instagram.com/rohitkumarsahu_/'>   <Instagram/></Link> 
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                  <Link target={'_blank'} href='https://www.facebook.com/kumarsahurohit'>   <Facebook/></Link> 
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
                  <ListItem>Feedback</ListItem>
              </List>
          </Center>
          <Right>
              <Title>Contact</Title>
              <ContactItem>
                 <Room/> Kanpur, U.P,022020
              </ContactItem>
              <ContactItem>
                <Phone/>  +91 7508541989
              </ContactItem>
              <ContactItem>
                <MailOutlined/>   rohit753kumar@gmail.com
              </ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>

    </Container>
  )
}

export default Footer