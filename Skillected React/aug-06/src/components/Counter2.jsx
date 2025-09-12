import React from 'react'
import CustomHook from './CustomHook'
const Counter2 = () => {

  const [count,incraese,decraese,reset]=CustomHook()
  console.log();
  return (
    <div>
      <h1>Counter-2 App</h1>
      <h2>Count : {count}</h2>

      <button onClick={incraese}>inc</button>
      <button onClick={decraese}>dec</button>
      <button onClick={reset}>reset</button>

    </div>
  )
}

export default Counter2