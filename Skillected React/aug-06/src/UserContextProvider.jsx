import React from 'react'
import dataStore from './Context'
const UserContextProvider = ({children}) => {
  // const [userDetail, setUserDetail] = 

  let name = "hello from context"
  let FormTitle = "this is form title"
  return (
    <div>
      <dataStore.Provider value={{name, FormTitle}}>
        {children}
      </dataStore.Provider>

    </div>
  )
}

export default UserContextProvider