import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import EachProduct from './EachProduct'
const Container=styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 60px;
`

const Products = () => {
  return (
      <Container>

          {popularProducts.map(item => (
              <EachProduct item={item} key={ item.id} />
          ))}
           
      </Container>
  )
}

export default Products