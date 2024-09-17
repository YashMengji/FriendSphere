import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import { useAsync } from '../hooks/useAsync';
import { getUser } from '../services/users';

const userContext = createContext();

export function useUser(){
  return useContext(userContext)
}

function UserContext({ children }) {

  const [users, setUsers] = useState([])
  const {loading, error, value} = useAsync(getUser);

  useEffect(() => {
    if(value){
      setUsers(value);
    }
  }, [value]);

  function createLocalUser(user) {
    setUsers(prevUsers => [user, ...prevUsers]); 
    console.log(users);
  }

  return (
    <userContext.Provider value={
      {
        createLocalUser,
        users
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