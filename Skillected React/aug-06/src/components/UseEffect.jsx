import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const [jokes, setJokes] = useState({})
  async function fetchData() {
    let response = await fetch("https://official-joke-api.appspot.com/jokes/random")
    const data = await response.json();
    // console.log(jokes);
    setJokes(data)
  }
console.log(jokes);
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
    {/* <span>X:{X} {"   "} Y:{Y}</span> <br /><br />
    <button onClick={()=>setX(X+1)}>X+</button>{""}
    <button onClick={()=>setY(Y+1)}>  Y+</button> <br /> */}

    <h1>Joke of the Day</h1>
    <p>{jokes.id}</p>
    <p>{jokes.type}</p>
    <p style={{fontWeight: "bold"}}>{jokes.setup}</p>
    <p>{jokes.punchline}</p>
    </div>
  )
}

export default UseEffect