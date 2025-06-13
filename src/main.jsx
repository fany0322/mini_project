import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import App from './App.jsx'
import Signup from './singup/Singup.jsx'
import Logins from './logins/logins.jsx'

function Root() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App loggedIn={loggedIn} />} />
        <Route path="/logins" element={<Logins onLogin={() => setLoggedIn(true)} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
