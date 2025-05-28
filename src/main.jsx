import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import App from './App.jsx'
import Login from './login.jsx'
import Signup from './singup/Singup.jsx'
import Logins from './logins/logins.jsx'

function Root() {
  const [screen, setScreen] = useState('login')
  if (screen === 'logins') {
    return <Logins />
  }

  if (screen === 'login') {
    return (
      <Login
        onLogin={() => setScreen('app')}
        onSignup={() => setScreen('signup')}
      />
    )
  }

  if (screen === 'signup') {
    return (
      <Signup
        onSignupComplete={() => setScreen('app')}
        onBackToLogin={() => setScreen('logins')}
      />
    )
  }

  if (screen === 'app') {
    return <App />
  }

  return null
}

createRoot(document.getElementById('root')).render(<Root />)
