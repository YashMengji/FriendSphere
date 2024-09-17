import React from 'react'

function FriendRequest({user}) {
  const {fname, lname, username} = user;
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
        <button className="accept-friend-btn">
          Accept request
        </button>
        <button className="reject-friend-btn">
          Reject
        </button>
      </div>
    </div>
  )
}

export default FriendRequest