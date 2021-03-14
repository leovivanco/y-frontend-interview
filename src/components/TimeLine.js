import React from 'react'
import { Button } from './ui'
import styled from 'styled-components'

const TimelineStyle = styled.div`
  position: absolute;
  width: 99%;
  bottom: 10px;
  display: flex;
  overflow: auto;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.4rem;
    background-color: #fff;
    font-size: 11px;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    &.active {
      background-color: #f00;
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
