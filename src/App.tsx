import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import DefaultLayout from './layouts/DefaultLayout'
import { Router } from './Routes'
import './styles/_main.scss'

function App() {

  return (
    <AuthProvider>
      <DefaultLayout>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </DefaultLayout>
    </AuthProvider>
  )
}

export default App
