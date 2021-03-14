import { useState } from 'react'
import useRandomFacts from './hooks/useRandomFacts'
import AppLayout from './components/ui/AppLayout'
import { TimeLineContext } from './contexts/TimeLineContext'
import TimeLine from './components/TimeLine'
import { Col } from './components/ui'

const App = () => {
  const { randomFacts, getNewFact, newFact } = useRandomFacts()
  const [currentFact, setCurrentFact] = useState('')

  return (
    <AppLayout>
      <TimeLineContext.Provider
        value={{
          randomFacts,
          getNewFact,
          currentFact,
          setCurrentFact,
          newFact
        }}
      >
        <Col>{currentFact?.text}</Col>
        <Col>
          <TimeLine />
        </Col>
      </TimeLineContext.Provider>
    </AppLayout>
  )
}

export default App
