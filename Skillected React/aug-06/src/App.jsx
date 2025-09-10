import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Other from './components/Other' // Assuming Other is a valid component
import UseEffect from './components/UseEffect'
import UseStateHook from './components/UseState'
// import { userData } from './components/data'
import { useState } from 'react'
import UserContextProvider from '../src/UserContextProvider'
function App() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [user, setUser] = useState(null);


function handleSubmit() {
  setUser({
    name: name,
    email: email
  })
  console.log(user)
}

  return (
    <>
    <UserContextProvider>
     <Navbar /><br /><br />
     {user ? 
     <Profile data={user}/>
      :<div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/><br /><br />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/><br /><br />
        <button onClick={handleSubmit}>Submit</button>
      </div>}
    
      <Other /><br /><br />
     </UserContextProvider>
    </>
  )
}

export default App
