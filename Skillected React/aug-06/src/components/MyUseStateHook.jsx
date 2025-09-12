import React from 'react'

const MyUseStateHook = (initialValue =0) => {
  let myCount = initialValue;
  const setMyCount = (value) => {
    console.log(myCount)
    myCount = myCount + value;
  }
  return [myCount,setMyCount]
}

export default MyUseStateHook