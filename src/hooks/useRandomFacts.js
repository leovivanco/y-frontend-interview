import { useState } from 'react'
import { getRandomDate } from '../common/http'
import { uniqBy } from 'lodash'

const fetch = async (setFacts, error) => {
  const result = await getRandomDate()
  if (result?.status === 200) {
    setFacts(result?.data)
  } else {
    error(true)
  }
}

const useRandomFacts = (setFacts) => {
  const [error, setError] = useState(false)
  const [currentFact, setCurrentFact] = useState(null)
  const sortByYear = (arr) => [...arr].sort((a, b) => a.number - b.number) || []

  const handleSuccess = (el) => {
    setCurrentFact(el)
    setFacts((prevState) => sortByYear(uniqBy([el, ...prevState], 'number')))
  }

  const getNewFact = () => fetch(handleSuccess, setError)

  return {
    getNewFact,
    currentFact,
    setCurrentFact,
    error
  }
}

export default useRandomFacts
