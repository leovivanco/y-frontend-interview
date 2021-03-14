import React, { useContext } from 'react'
import { TimeLineContext } from '../contexts/TimeLineContext'
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
  .year {
  }
`

const TimeLine = () => {
  const { randomFacts, getNewFact, currentFact, setCurrentFact } = useContext(
    TimeLineContext
  )
  const sortByYear = randomFacts.sort((a, b) => a.number - b.number)

  return (
    <>
      <button onClick={getNewFact}>Generate</button>
      <TimelineStyle>
        {sortByYear.map((fact) => (
          <div
            key={fact.number}
            onClick={() => setCurrentFact(fact)}
            className={`swiper-slide ${
              fact.number === currentFact?.number ? 'active' : null
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
