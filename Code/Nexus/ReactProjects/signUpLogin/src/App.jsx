import { useState } from 'react'
import './components/SignUp'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  const [isLogin, setIsLogin] = useState(true);


  return (
        <div className="App">
      {isLogin ? (<Login switchToSignUp={() => setIsLogin(false)} />) : (<SignUp switchToLogin={() => setIsLogin(true)} /> )}
    </div>
  )
}

export default App
