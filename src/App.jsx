import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'
import { Toaster } from 'sonner'

function App() {
  return (
    <Router>
      <Toaster position="top-center" richColors />
      <Routes>
        {PublicRoutes({})}
      </Routes>
    </Router>
  )
}

export default App
