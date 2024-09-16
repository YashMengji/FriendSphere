import React from 'react'

function Login() {
  return (
    <div className="div-full-container">
      <div className="div-login-form">
        <div className="div-logo-img">
          <img src="/images/logo_img.jpg" alt="" className="logo-img" />
        </div>
        <div className="div-sign-text">
          Sign in
        </div>
        <form method='POST' className='login-form'>
          <input type="text"className="username-input" placeholder="Username"/>
          <input type="password" className="password-input" placeholder="Password"/>
          <a href="/register" className="register-link">New Here? Register</a>
          <button className="login-btn">LOGIN</button>
        </form>
      </div>
    </div>
  )
}

 export default Login