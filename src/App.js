import { useState } from 'react'
import useRandomFacts from './hooks/useRandomFacts'
import AppLayout from './components/ui/AppLayout'
import { TimeLineContext } from './contexts/TimeLineContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TimeLinePage from './pages/TimeLinePage'

const App = () => {
  const { randomFacts, getNewFact, newFact } = useRandomFacts()
  const [currentFact, setCurrentFact] = useState('')

  return (
    <TimeLineContext.Provider
      value={{
        randomFacts,
        getNewFact,
        currentFact,
        setCurrentFact,
        newFact
      }}
    >
      <AppLayout>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/timeline" exact component={TimeLinePage} />
          </Switch>
          {/* <Col>{currentFact?.text}</Col>
        <Col>
          <TimeLine />
        </Col> */}
        </Router>
      </AppLayout>
    </TimeLineContext.Provider>
  )
}

export default App
