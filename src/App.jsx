import './App.css'
import { BrowserRouter as Router, Routes, } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'
import UserRoutes from './routes/UserRoutes'

import { Toaster } from 'sonner'

function App() {
  return (
    <Router>
      <Toaster position="top-center" richColors />
      <Routes>
        {PublicRoutes({})}
        {UserRoutes({})}
        {/* {EngineerRoutes({  })} */}
        {/* {AdminRoutes({  })} */}
      </Routes>
    </Router>
  )
}

// bg #0a0712 #011b38 #1B2B4D #1e2021 #0080ff text  #9c9c9c #cecece #f0edfa #ffffff
//Connect N Fix
//Eddyfix

export default App
