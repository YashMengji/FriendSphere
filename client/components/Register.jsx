import React, { useState } from 'react';
import { useAsyncFn } from '../hooks/useAsync';
import { createUser } from '../services/users';
import { useUser } from '../contexts/UserContext';

function Register() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const createUserFn = useAsyncFn(createUser);
  const {createLocalUser} = useUser();

  function onUserRegister(){
    return createUserFn.execute({fname, lname, username, password, email})
    .then(user => {
      createLocalUser(user);
    })
  }
  
  return (
    <>
      <div className="register-div">
        <div className="div-logo-img-register">
          <img className="logo-img-register" src="/images/logo_img.jpg" alt="Logo" />
        </div>
        <div className="div-register-text">
          Register Now
        </div>
        <form onSubmit={onUserRegister} method='POST' className='register-form'>
          <div className="name-register-input">
            <input required type="text" name="fname" id="fname" className="Fname-input" placeholder="First Name" value={fname} onChange={(e) => {setFname(e.target.value)}} />
            <input required type="text" name="lname" id="lname" className="Lname-input" placeholder="Last Name" value={lname} onChange={(e) => {setLname(e.target.value)}}/>
          </div>
          <div className="div-username-input">
            <input required type="username" name="username" id="username" className="username-register-input" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            <input required type="password" name="password" id="password" className="password-register-input" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <input required type="email" name="email" id="email" className="email-register-input" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          <button disabled={createUserFn.loading} type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;