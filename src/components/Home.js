import React from 'react'
import imgHome from '../assets/images/background.png'
import styled from 'styled-components'
import { Col } from '../components/ui'

const HomeDetails = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  flex-flow: column;
  align-items: center;
  padding: 0 1rem;
  h1 {
    font-size: 7.1rem;
    text-shadow: 3px 7px black;
    max-width: 500px;
  }
  p {
    font-size: 2.9rem;
    font-weight: bold;
    text-shadow: 1px 2px black;
    max-width: 500px;
  }
`

const Home = () => {
  return (
    <Col bg={imgHome}>
      <HomeDetails>
        <h1>Random Year Facts</h1>
        <p>Generate random fact, from random years</p>
      </HomeDetails>
    </Col>
  )
}

export default Home
