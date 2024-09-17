import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useUser } from '../contexts/UserContext'

function Navbar() {

  const { search, setSearch } = useUser();

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
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
          <Link className="section-link" to="/home">
            <i className="fa-solid fa-house fa-xl"></i>
          </Link>
        </div>
        <input className="search-bar" type="text" placeholder="Search" value={search} onChange={onSearchChange} />
        <button className="search-icon-button" >
          <img className="search-icon" src="/images/search.svg" />
        </button>
      </div>
      <div className="div-nav-right">
        <div className="div-bell-icon">
          <Link className="section-link" to="/notification">
            <i className="fas fa-bell fa-xl"></i>
          </Link>
        </div>
        <div className="div-profile">
          <Link to="/login" className="login-btn-link">
            <button className="sign-in-btn">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Navbar