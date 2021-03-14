import React, { createContext, useState } from 'react'
import useRandomFacts from '../hooks/useRandomFacts'

export const TimeLineContext = createContext()

export const TimeLineProvider = (props) => {
  const [facts, setFacts] = useState([])
  const { getNewFact, currentFact, setCurrentFact } = useRandomFacts(setFacts)

  const AddNewFact = () => getNewFact()
  const RemoveFact = (factToRemove) => {
    setCurrentFact(null)
    currentFact &&
      setFacts((prevStare) => [
        ...prevStare.filter((fact) => fact.number !== factToRemove.number)
      ])
  }

  return (
    <TimeLineContext.Provider
      value={{ facts, currentFact, AddNewFact, RemoveFact, setCurrentFact }}
    >
      {props.children}
    </TimeLineContext.Provider>
  )
}
