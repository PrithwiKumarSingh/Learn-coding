import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Expense from './pages/Dashboard/Expense'
import Income from './pages/Dashboard/Income'
import Home from './pages/Dashboard/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root/>}> </Route>
          <Route path='/login' exact element={<Login/>}></Route>
          <Route path='/signup' exact element={<SignUp/>}></Route>
          <Route path='/dashboard' exact element={<Home/>}></Route>
          <Route path='/expense' exact element={<Expense/>}></Route>
          <Route path='/income' exact element={<Income/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App


const Root = ()=>{
  // check if token exists in localstorage 
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to='./dashboard'/>
  ) : (
    <Navigate to='./login'/>
  )

}