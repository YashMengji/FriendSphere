import React, { useEffect, useState } from 'react'
import User from './User'
import { useUser } from '../contexts/UserContext'


function Home() {

  const {users, setUsers, dToken, search} = useUser();
  const [friends, setFriends] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);
  const [friendRequestsSent, setFriendRequestsSent] = useState([]);
  console.log(users);

  useEffect(() => {
    const currentUser = users.find(user => user._id === dToken.userId);
    if (currentUser) {
      setFriends(currentUser.friends || []);
      setFriendRequestsSent(currentUser.friendRequestsSent || []);
    }
  }, [users, dToken]); // Run this effect when users or dToken changes

  useEffect(() => {
    if(search){
      const searchResults = users.filter(user => user.fname.toLowerCase().includes(search.toLowerCase()) || user.lname.toLowerCase().includes(search.toLowerCase()) || user.username.toLowerCase().includes(search.toLowerCase()));
      setUsers(searchResults);
    }
  }, [search]);




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