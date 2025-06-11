import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Signup from './singup/Singup.jsx'
import Logins from './logins/logins.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />         
      <Route path="/logins" element={<Logins />} />
      
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
)
