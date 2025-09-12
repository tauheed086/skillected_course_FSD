import { useState } from 'react'

const UseStateHook = () => {
        // console.log({ useState()})
        let [count, setCount] = useState(22);
        const increment = () =>{
            // setCount(count + 1)  
            // setCount(count + 1)
            // console.log(count);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);



}

  return (
    <div>
      <h1>{count}</h1>
    <button onClick={increment}>increase</button>
    <button onClick={()=> setCount(count-1)}>decrease</button>

    </div>
  )
}

export default UseStateHook