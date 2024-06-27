// import Week from "./components/Week";
// import { getWeeksArray } from "./service/getWeeksArray";
import Header from './components/Header';
import Profile from './components/Profile';
import './App.css'
import { useState } from "react";
import { UserProvider } from './components/UserContext';

const App = () => {

  // const[users, setUsers] = useState(people);
  // const[selectedUserId, setSelectedUserId] = useState(0);

  // const handleOnChange = (selectedId) =>{
  //   setSelectedUserId(parseInt(selectedId));
  // }


  return (
    // <>
    //   <Header users = {users} handleChange={handleOnChange} selectedUserId={selectedUserId}/>

    //   <Profile user = {users[selectedUserId]}/>
    // </>
    <>
      <Header/>
      <Profile/>
    </>
  )
}

export default App
