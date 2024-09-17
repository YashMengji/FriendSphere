import React from 'react'

function FriendRequest() {
  // const {fname, lname, username} = user;
  return (
    <div className="user-div"> 
      <div className="div-profile-img">
        <img src="/images/defaultProfileImg.png" className='profile-img'/>
      </div>
      <div className="div-profile-details"> 
        <div className="div-profile-name ">Yash Mengji</div>
        <div className="div-profile-username ">yashM</div>
      </div>
      <div className="div-request-friend-btn">
        <button className="accept-friend-btn ">
          Accept
        </button>
        <button className="reject-friend-btn ">
          Reject
        </button>
      </div>
    </div>
  )
}

export default FriendRequest