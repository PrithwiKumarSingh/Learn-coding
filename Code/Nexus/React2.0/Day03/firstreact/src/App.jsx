import UserCard from "./components/UserCard"
import "./App.css"
import Chris from "./assets/ChristopherNolan.jpg";
import Elon from "./assets/ElonMusk.jpg";
import David from "./assets/DavidGoggins.jpeg";

function App() {

  return (
    <div className="users">
    <UserCard style={{backgroundColor:"red", color:"white"}} name="Christopher Nolan" image={Chris} des="Christopher Nolan is great Cinema Director in the world." />
    <UserCard style={{backgroundColor:"cyan", color:"black"}} name="Elon Musk"  image={Elon} des="Elon Musk is the Richest person in the world and also its very genius." />
    <UserCard style={{backgroundColor:"wheat", color:"black"}}  name="David Goggins" image={David} des="David Goggins is known as a Discipline and consistance person in the world." />
    </div>
  )
}

export default App
