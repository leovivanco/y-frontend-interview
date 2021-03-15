import AppLayout from './components/ui/AppLayout'
import { TimeLineProvider } from './contexts/TimeLineContext'
import TimeLinePage from './pages/TimeLinePage'

const App = () => {
  return (
    <TimeLineProvider>
      <AppLayout>
        <TimeLinePage />
      </AppLayout>
    </TimeLineProvider>
  )
}

export default App
