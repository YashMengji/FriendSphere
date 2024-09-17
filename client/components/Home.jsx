import React from 'react'
import User from './User'
import { useUser } from '../contexts/UserContext'

function Home() {

  const {users} = useUser();
  console.log(users);

  return (
    <div className="home-div">
      {
        users.map(user => 
          <User 
            key={user._id} 
            user={user} 
          />
        )
      }
    </div>
  )
}

export default Home