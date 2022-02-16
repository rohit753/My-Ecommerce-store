// import { Title } from '@material-ui/icons'
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcment from '../Components/Announcment'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import { mobile } from "../reponsive"


const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px",flexDirection: "column" })};

`
const ImageContain = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 80vh;
object-fit: cover;
${mobile({ height:   "40vh" })};
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding:   "10px" })};
`
// const InfoContainer=styled.div``
const Title = styled.h1`
font-weight: 200;

`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.h2`
font-weight: 100;
font-size: 40px;

`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({ width:   "100%" })};
`
const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSizeSelect = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption=styled.option``
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width:   "100%" })};

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
${mobile({ width:   "100%" })};
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
&:hover{
    background-color: wheat;
}
/* ${mobile({ width:   "100%" })}; */
`
// const Amount=styled.option``
// const FilterContainer=styled.div``


const SingleProduct = () => {
  return (
      <Container>
          <Announcment />
          <Navbar />
          <Wrapper>
              <ImageContain>
                  <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
              </ImageContain>
              <InfoContainer>
                  <Title>Denim JumpSuit</Title>
                  <Desc> Lorem ipsum dolor sit amet quis fpariatur nihil aut. Accusamus, dolor consectetur! Rerum ullam, sapiente reprehenderit excepturi voluptatem corrupti deleniti voluptatum ipsum dolore blanditiis ipsa, optio iusto doloribus amet vitae quam officia inventore perspiciatis molestiae eligendi ad veritatis. Libero eaque necessitatibus, consequatur dolor blanditiis ipsam quam minus dignissimos eius ad eos maiores voluptatibus iure corrupti totam non voluptatum nesciunt possimus animi sapiente reiciendis vero ipsum architecto cumque. Fugiat ab quam assumenda laborum! </Desc>
                  <Price>$ 50</Price>

                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color : </FilterTitle>
                          <FilterColor color="black"/>
                          <FilterColor color="Blue"/>
                          <FilterColor color="Gray"/>
                      </Filter>
                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSizeSelect>
                              <FilterSizeOption>XS</FilterSizeOption>
                              <FilterSizeOption>S</FilterSizeOption>
                              <FilterSizeOption>M</FilterSizeOption>
                              <FilterSizeOption>L</FilterSizeOption>
                              <FilterSizeOption>XL</FilterSizeOption>
                              <FilterSizeOption>XXL</FilterSizeOption>
                         </FilterSizeSelect>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Remove />
                          <Amount>1</Amount>
                          <Add/>
                      </AmountContainer>
                      <Button>ADD TO Cart</Button>
                  </AddContainer>

              </InfoContainer>

          </Wrapper>
          <Newsletter />
          <Footer/>
    </Container>
  )
}

export default SingleProduct