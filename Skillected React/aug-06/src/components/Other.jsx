import  { useContext } from 'react'
import dataStore from '../Context';
// useContext
const Other = () => {
  const {name} = useContext(dataStore);
  console.log(name);
  //
//  console.log(useContext(UserContext));
  return (
    <>
    <h1>Other's Page</h1>
    <h1> {name}</h1>
    </>
  )
}

export default Other