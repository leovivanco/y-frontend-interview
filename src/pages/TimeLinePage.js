import React, { useContext } from 'react'
import styled from 'styled-components'
import TimeLine from '../components/TimeLine'
import Home from '../components/Home'
import { Col, ButtonIcon } from '../components/ui'
import { TimeLineContext } from '../contexts/TimeLineContext'
import deleteIcon from '../assets/icons/delete.svg'

const TimeLineDetails = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  flex-flow: column;
  align-items: center;
  padding: 0 1rem;
  h1 {
    font-size: 9.1rem;
    max-width: 500px;
    font-weight: bold;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    max-width: 600px;
  }
  .buttonIcon {
    align-self: flex-end;
  }
`

const TimeLinePage = () => {
  const {
    facts,
    AddNewFact,
    RemoveFact,
    currentFact,
    setCurrentFact
  } = useContext(TimeLineContext)

  return (
    <>
      {currentFact ? (
        <Col bgColor="#fff">
          <TimeLineDetails>
            <h1>{currentFact?.number}</h1>
            <p>{currentFact?.text}</p>
            <ButtonIcon
              className="buttonIcon"
              onClick={() => RemoveFact(facts[0])}
            >
              <img src={deleteIcon} alt="Delete fact" />
            </ButtonIcon>
          </TimeLineDetails>
        </Col>
      ) : (
        <Home />
      )}

      <Col>
        <TimeLineDetails>
          <TimeLine
            facts={facts}
            addFact={() => AddNewFact()}
            currectFact={currentFact}
            setCurrectFact={setCurrentFact}
          />
        </TimeLineDetails>
      </Col>
    </>
  )
}

export default TimeLinePage
