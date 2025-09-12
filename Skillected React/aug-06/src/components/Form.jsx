import { useState, useContext} from 'react'
import dataStore from '../Context';


const Form = () => {
  const { FormTitle } = useContext(dataStore);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
    console.log(name, email)
  }

  return (
    <div>
      <h1>{FormTitle}</h1>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/><br /><br />
      <label htmlFor="email">Email</label>
      <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/><br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form