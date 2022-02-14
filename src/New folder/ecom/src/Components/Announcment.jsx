import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color:coral ;
color: white;
display: flex;
align-content: center;
justify-content: center;
font-style: 14px;
font-weight: 500;


`

const Announcment = () => {
    return (
        <Container>Buy 2 get 1 free on all orders above 1000₹</Container>
    )
}

export default Announcment