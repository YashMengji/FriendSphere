import React, { useEffect, useState } from 'react'
import User from './User'
import { useUser } from '../contexts/UserContext'


function Home() {

  const {users, dToken} = useUser();
  const [friends, setFriends] = useState([]);
  const [friendRequestsSent, setFriendRequestsSent] = useState([]);
  console.log(users);

  useEffect(() => {
    const currentUser = users.find(user => user._id === dToken.userId);
    if (currentUser) {
      setFriends(currentUser.friends || []);
      setFriendRequestsSent(currentUser.friendRequestsSent || []);
    }
  }, [users, dToken]); // Run this effect when users or dToken changes


  return (
    <div className="home-div">
      {
        
          users.map(user => {
            if(user._id == dToken.userId || friends.includes(user._id) || friendRequestsSent.includes(user._id)){
              return null;
            }
            else{
              return <User key={user._id} user={user} />
            }
          })
        
      }
    </div>
  )
}

export default Home