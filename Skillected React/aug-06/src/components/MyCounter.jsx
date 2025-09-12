import React from 'react'
import MyUseStateHook from './MyUseStateHook'

const MyCounter = () => {
  const [myCount,setMyCount]=MyUseStateHook(1);
  return (
    <div>
      <h1>Hello my counter</h1>
      <h2>Count:{myCount}</h2>
      <button onClick={()=>setMyCount(myCount+1)}>incraese</button>
    </div>
  )
}

export default MyCounter