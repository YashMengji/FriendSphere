import React from 'react'

function Navbar() {
  return (
    <>
      <div className="nav-div">
        <div className="div-nav-left">
          <div className="div-nav-logo">
            <img src="/images/logo_img.jpg" className="nav-logo" />
          </div>
          <div className="div-nav-name">
            FriendSphere
          </div>
        </div>
        <div className="div-nav-middle">
          <div className="div-home">  
            <a className="section-link" href="/">
              <i className="fa-solid fa-house fa-xl"></i>
            </a>
          </div>
          <input className="search-bar" type="text" placeholder="Search"/>
          <button className="search-icon-button">
            <img className="search-icon" src="/images/search.svg" />
          </button>
        </div>
        <div className="div-nav-right">
          <div className="div-bell-icon">
            <i className="fas fa-bell fa-xl"></i>
          </div>
          <div className="div-profile">
            <a href="/login" className="login-btn-link">
              <button className="sign-in-btn">
                Sign In
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar