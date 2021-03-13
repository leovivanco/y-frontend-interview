import { useState, useEffect } from 'react'
import { getRandomDate } from '../common/http'

const fetch = async (success, error) => {
  const result = await getRandomDate()
  if (result?.status === 200) {
    success(result?.data)
  } else {
    error(true)
  }
}

const useRandomFacts = () => {
  const [randomFact, setRandomFact] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    getNewFact(setRandomFact, setError)
  }, [])

  const getNewFact = () => fetch(setRandomFact, setError)

  return {
    randomFact,
    getNewFact,
    error
  }
}

export default useRandomFacts
