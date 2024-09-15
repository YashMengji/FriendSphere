import React from 'react'
import { createContext, useContext, useState } from 'react'

const userContext = createContext();

export function useUser(){
  return useContext(userContext)
}

function UserContext({ children }) {

  const [users, setUsers] = useState([])

  function createLocalUser(user) {
    setUsers(prevUsers => [user, ...prevUsers]);  
  }

  return (
    <userContext.Provider value={
      {
        createLocalUser
      }
    }
    >
      {
        // loading ? (<h1>Loading...</h1>) :
        // error ? (<h1>Error</h1>) :
        children
      }
    </userContext.Provider>
  )
}

export default UserContext