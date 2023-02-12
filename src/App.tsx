import { BrowserRouter } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import { Router } from './Routes'
import './styles/_main.scss'

function App() {

  return (
    <DefaultLayout>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </DefaultLayout>

  )
}

export default App
