import React from 'react'
import styled from 'styled-components'
import Announcment from '../Components/Announcment'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import { mobile } from "../reponsive"

const Container=styled.div`
    
`
const Title = styled.h1`
margin: 20px;
`
const Filter = styled.div`
margin: 20px;`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
${mobile({ marginLeft: "0px",width:  "100%",display: "flex",flexDirection: "column" })};
`

const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
    margin: 20px;
    font-weight: 600;
    ${mobile({ marginLeft: "0px",margin: "10px" })};
`
const Select=styled.select`
  padding: 10px; 
  margin-right: 20px;
  font-weight: 600;
  ${mobile({ marginRight:   "5px" })};
  /* margin: 10px; */
`
const Option=styled.option`
    font-size: 16px;
    /* margin: 10px; */
    font-weight: 600;
`

const ProductList = () => {
  return (
      <Container>
           <Announcment/>
          <Navbar />
          <Title>Dress</Title>
          <FilterContainer>
            
              <Filter>
                  <FilterText>Filter Products</FilterText>
                  <Select>
                      <Option disabled selected>Color</Option>
                      <Option>White</Option>
                      <Option>Black</Option>
                      <Option>Red</Option>
                      <Option>Blue</Option>
                      <Option>Yellow</Option>
                      <Option>Green</Option>
                  </Select>
                  <Select>
                      <Option disabled selected>Size</Option>
                      <Option>XS</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                      <Option>XXL</Option>
                  </Select>
              </Filter>
              <Filter>
                  <FilterText>Sort Products</FilterText>
                  <Select>
                      <Option disabled selected>Popular</Option>
                      <Option>Newest</Option>
                      <Option>Price hight to low</Option>
                      <Option>Price low to high</Option>
                      <Option>Only for Kids</Option>
                      <Option>Only for Men</Option>
                      <Option>Only for Women</Option>
                  </Select>
              </Filter>
              
          </FilterContainer>
          <Products />
          <Newsletter />
          <Footer/>
          
         
    </Container>
  )
}

export default ProductList