import React from 'react'

function User({user}) {
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
        <button className="add-friend-btn">
          Add Friend
        </button>
      </div>
    </div>
  )
}

export default User