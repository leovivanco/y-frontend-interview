import './App.css'

import useRandomFacts from './hooks/useRandomFacts'
import AppLayout from './components/ui/AppLayout'

const App = () => {
  const { randomFact, getNewFact, error } = useRandomFacts()

  if (error) {
    return <div>Someting Wrong!</div>
  }

  return (
    <AppLayout>
      {randomFact?.text}
      <button onClick={getNewFact}>Random</button>
    </AppLayout>
  )
}

export default App
