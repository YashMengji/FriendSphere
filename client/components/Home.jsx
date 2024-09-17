import React, { useEffect, useState } from 'react'
import User from './User'
import { useUser } from '../contexts/UserContext'
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

function Home() {

  const {users} = useUser();
  const [userId, setUserId] = useState(null);

  console.log(users);
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.userId); // Assuming the token contains a userId field
    }
  } ,[])

  return (
    <div className="home-div">
      {
        users.map(user => {
          if(user._id == userId){
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