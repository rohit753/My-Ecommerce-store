import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcment from "../Components/Announcment"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { Step, StepLabel, Typography } from '@material-ui/core'
import { mobile } from "../reponsive"

const Container = styled.div``
const Wraper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;

`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton=styled.button`
   padding: 10px;
   font-weight :600 ;
   cursor: pointer;
   border:${(props) => props.type === "filled" && "none"};
   background-color: ${(props) => props.type === "filled" ? "black" : "transparent" };
   color:${(props)=>props.type==="filled"&&"white"};
`
const TopTexts = styled.div`
${mobile({ display:   "none" })};
`
const Toptext = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection:    "column" })};
`
const Info = styled.div`
flex:3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
background-color: #fff3f3;
margin: 15px;
${mobile({ flexDirection:    "column" })};
`
const ProDetails = styled.div`
flex:1;
display: flex;
${mobile({ border:   "1px solid gray" })};

`
const Details = styled.div`
padding: 30px 0px ;
display: flex;
flex-direction: column;
justify-content: space-around;
${mobile({border: "1px solid gray" ,paddingLeft:    "30px",justifyContent:  "space-between",backgroundColor: "white" })};
`
const ProName=styled.span``
const ProId=styled.span``
const ProColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=>props.color};

`
const ProSize=styled.span``
const Image = styled.img`
width: 85%;
margin: 15px;

`
const PriceDetails = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const AmountContainer = styled.div`
display: flex;
/* flex-direction: column; */
align-items: center;
margin-bottom: 20px;
`
const ProCount = styled.div`
font-size: 24px;
margin: 5px;
padding: 5px 10px;
background-color: white;
`
const ProPrice = styled.div`
font-size: 24px;
${mobile({ marginBottom:     "15px" })};

/* margin: 5px; */
`
const Unitext = styled.h4`
font-weight: 300;
font-size: 20px;
    margin: 10px;
`
const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
flex:1;
margin: 15px;
border: 2.5px solid lightgray;
padding: 30px 30px 30px 30px;
height: 40vh;


`

const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin:30px 0px ;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==="total" && "600"};
font-size: ${props=>props.type==="total" && "25px"};

`
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const SumButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
font-size: 25px;
cursor: pointer;
`
// import React from 'react'


const Cart = () => {
  return (
      <Container>
         
          <Navbar />
          <Announcment/>
          <Wraper>
              <Title>YOUR CART</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                      <Toptext>Shooping Bag(2)</Toptext>
                      <Toptext>Your Wishlist(0)</Toptext>
                  </TopTexts>
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
              </Top>
              <Bottom>
                  <Info>
                      <Product>
                          <ProDetails>
                              <Image src="https://images.unsplash.com/photo-1584382296087-ac00c7263710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                          </ProDetails>
                          <Details>
                              <ProName><b>Product : </b>Jessie jeans Classic</ProName>
                              <ProId><b>ID :</b>8699D99976AFR</ProId>
                              <ProColor color="blue"/>
                              <ProSize><b>Size : </b>32</ProSize>
                          </Details>
                          <PriceDetails>
                          <Unitext>Units</Unitext>
                              <AmountContainer>
                                  
                                  <Add />
                                  <ProCount>1</ProCount>
                                  <Remove />
                                 
                              </AmountContainer>
                              <ProPrice>$ 30</ProPrice>
                          </PriceDetails>
                      </Product>
                      <Hr/>
                      <Product>
                          <ProDetails>
                              <Image src="https://images.unsplash.com/photo-1584382296103-92ddc0921fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                          </ProDetails>
                          <Details>
                              <ProName><b>Product : </b>Jessie jeans Classic</ProName>
                              <ProId><b>ID :</b>8699D99976AFR</ProId>
                              <ProColor color="blue"/>
                              <ProSize><b>Size : </b>32</ProSize>
                          </Details>
                          <PriceDetails>
                          <Unitext>Units</Unitext>
                              <AmountContainer>
                                  
                                  <Add />
                                  <ProCount>1</ProCount>
                                  <Remove />
                                 
                              </AmountContainer>
                              <ProPrice>$ 30</ProPrice>
                          </PriceDetails>
                      </Product>

                  </Info>
                  <Summary>
                      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                      <SummaryItem>
                          <SummaryItemText>Subtotal</SummaryItemText>
                          <SummaryItemPrice>$ 70</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                          <SummaryItemText>Estimated Shipping</SummaryItemText>
                          <SummaryItemPrice>$ 7</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                          <SummaryItemText>Shipping Discount</SummaryItemText>
                          <SummaryItemPrice>$ -5</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem type="total">
                          <SummaryItemText >Total</SummaryItemText>
                          <SummaryItemPrice>$ 72</SummaryItemPrice>
                      </SummaryItem>
                      <SumButton>CHECKOUT NOW</SumButton>
                  </Summary>
              </Bottom>
          </Wraper>
          <Newsletter />
          <Footer/>
          
    </Container>
  )
}

export default Cart