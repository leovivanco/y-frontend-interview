import React from 'react'
import AppLayout from './AppLayout'
import imgHome from '../assets/images/background.png'
import Col from './Col'

const Home = () => {
  return (
    <AppLayout>
      <Col>
        <img src={imgHome} alt="A random guy" />
      </Col>
      <Col>dsadsa</Col>
    </AppLayout>
  )
}

export default Home
