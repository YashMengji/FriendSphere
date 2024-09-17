import React from 'react'
import { useAsyncFn } from '../hooks/useAsync';
import { sendRequest } from '../services/users';
import { useRef } from 'react';

function User({user}) {

  const {_id, fname, lname, username} = user;
  const buttonRef = useRef(null);

  const sendRequestFn = useAsyncFn(sendRequest)

  function sendFriendRequest() {
    sendRequestFn.execute({receiverId: _id})
    .then(ack => {
      if(ack) {
        buttonRef.current.style.backgroundColor = "green";
        buttonRef.current.innerHTML = "Request Sent";
        buttonRef.current.disabled = true;
      }
    })
  }

  return (
    <div className="user-div">
      <div className="div-profile-img">
        <img src="/images/defaultProfileImg.png" className='profile-img'/>
      </div>
      <div className="div-profile-details"> 
        <div className="div-profile-name ">{fname} {lname}</div>
        <div className="div-profile-username ">{username}</div>
      </div>
      <div className="div-add-friend-btn">
        <button ref={buttonRef} className="add-friend-btn" onClick={sendFriendRequest}>
          Add Friend
        </button>
      </div>
    </div>
  )
}

export default User