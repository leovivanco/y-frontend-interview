import React from 'react'
import { Button } from './ui'
import styled from 'styled-components'

const TimelineStyle = styled.div`
  position: absolute;
  width: 95%;
  bottom: 25px;
  display: flex;
  flex-flow: wrap;
  overflow: auto;
  .swiper-slide {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: 11px;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    &.active {
      background-color: #6d6161;
      color: #fff;
    }
  }
`

const TimeLine = ({ addFact, facts, currectFact, setCurrectFact }) => {
  return (
    <>
      <Button onClick={addFact}>Generate Random Year Fact</Button>
      <TimelineStyle>
        {facts &&
          facts.map((fact) => (
            <div
              key={fact.number}
              onClick={() => setCurrectFact(fact)}
              className={`swiper-slide ${
                fact.number === currectFact?.number ? 'active' : null
              } `}
            >
              <div className="timestamp">
                <span className="year">{fact?.number}</span>
              </div>
            </div>
          ))}
      </TimelineStyle>
    </>
  )
}

export default TimeLine
