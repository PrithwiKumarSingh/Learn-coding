import React, { useContext } from 'react'
import { useEffect,useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);
  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser");
    }
  }, [authData]);
  
  

  const handleLogin = (email,password) =>{
    if(email == "admin@me.com" && password == 123){
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } else if(authData && authData.employees.find((e)=>email == e.email && password == e.password)){
      setUser("employee");
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}));
    } else{
      alert("Invalid Creadentials");
    }
  }



  
  return (
    <>
    {!user?  <Login handleLogin={handleLogin}/> : ""}
    {user == "admin"? <AdminDashboard/> : <EmployeeDashboard/> }
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
 