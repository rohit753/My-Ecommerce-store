import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
opacity: 0;
   z-index :3 ;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background-color: rgba(0,0,0,0.2222);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   position: absolute;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 90px;
    margin-top: 15px;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
     opacity: 1;
     transition: all .8s ease;
    }
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; */
    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px; */
`

const Circle = styled.div`
  width: 310px;
  height: 330px;
  border-radius  :20% ;
  background-color: rgb(245, 255, 248);
  position: absolute;

`
const Image = styled.img`
    height: 75%;
    z-index: 2;
    
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin :15px ;
    transition: all 0.35s ease;
    &:hover{
        background-color:#e9f5f5;
        transform: scale(1.25);
    }
`

const EachProduct = ({ item}) => {
  return (
      <Container>
          <Circle />
          <Image src={ item.img} />
          <Info>
              <Icon>
                  <ShoppingCartOutlined/>
              </Icon>
              <Icon>
                  <SearchOutlined/>
              </Icon>
              <Icon>
                  <FavoriteBorderOutlined/>
              </Icon>
          </Info>
    </Container>
  )
}

export default EachProduct