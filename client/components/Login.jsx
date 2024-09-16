import React, { useState } from 'react'
import { useAsyncFn } from '../hooks/useAsync';
import { checkUser } from '../services/users';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkUserFn = useAsyncFn(checkUser);

  function onUserLogin(e){
    e.preventDefault(); // Prevent default form submission
    checkUserFn.execute({username, password})
    .then(user => {
      console.log(user)
      setUsername("");
      setPassword("");
    })
  }
  
  return (
    <div className="div-full-container">
      <div className="div-login-form">
        <div className="div-logo-img">
          <img src="/images/logo_img.jpg" className="logo-img" />
        </div>
        <div className="div-sign-text">
          Sign in
        </div>
        <form onSubmit={onUserLogin} className='login-form'>
          <input required value={username} onChange={e => setUsername(e.target.value)} type="text" className="username-input" placeholder="Username"/>
          <input required value={password} onChange={e => setPassword(e.target.value)} type="password" className="password-input" placeholder="Password"/>
          <a href="/register" className="register-link">New Here? Register</a>
          <button disabled={checkUserFn.loading} className="login-btn">Login</button>
          {checkUserFn.error && (
            <div className="div-login-error">
              {checkUserFn.error}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

 export default Login