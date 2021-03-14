import { useState, useEffect } from 'react'
import { getRandomDate } from '../common/http'
import { uniqBy } from 'lodash'

const fetch = async (success, setNewFact, error) => {
  const result = await getRandomDate()
  if (result?.status === 200) {
    setNewFact(result?.data)
    success((prevState) => uniqBy([...prevState, result?.data], 'number'))
  } else {
    error(true)
  }
}

const useRandomFacts = () => {
  const [randomFacts, setRandomFacts] = useState([])
  const [newFact, setNewFact] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    getNewFact()
  }, [])

  const getNewFact = () => fetch(setRandomFacts, setNewFact, setError)

  return {
    randomFacts,
    getNewFact,
    newFact,
    error
  }
}

export default useRandomFacts
