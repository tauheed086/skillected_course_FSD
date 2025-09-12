import React, { useState } from 'react'


const CustomHook = (initialVal = 0) => {
const[count,setCount]= useState(initialVal);

const incraese =()=>  setCount(count+1)
const decraese =()=>  setCount(count-1)
const reset =()=>  setCount(0)



  return [count,incraese,decraese,reset]
}

export default CustomHook