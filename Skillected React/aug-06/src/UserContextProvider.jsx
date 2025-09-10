import React from 'react'
import dataStore from './Context'
const UserContextProvider = ({children}) => {
  // const [userDetail, setUserDetail] = 

  let name = "hello from context"
  return (
    <div>
      <dataStore.Provider value={{name}}>
        {children}
      </dataStore.Provider>

    </div>
  )
}

export default UserContextProvider