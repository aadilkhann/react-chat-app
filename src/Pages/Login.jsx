import React from 'react'
import add from "../img/addAvatar.png"

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">ChatRio</span>
        <span className="title">Log-in</span>
        <form>
            <input type="email" placeholder='E-mail'/>
            <input type="password" placeholder='Password'/>
            <button>Sign-In</button>
        </form>
        <p>Don't have an Account? Register </p>
      </div>
    </div>
  )
}

export default Login
