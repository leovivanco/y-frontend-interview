import AppLayout from './components/ui/AppLayout'
import { TimeLineProvider } from './contexts/TimeLineContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TimeLinePage from './pages/TimeLinePage'

const App = () => {
  return (
    <TimeLineProvider>
      <AppLayout>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/timeline" exact component={TimeLinePage} />
          </Switch>
        </Router>
      </AppLayout>
    </TimeLineProvider>
  )
}

export default App
