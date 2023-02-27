import React from 'react'
import add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">chatRio</span>
        <span className="title">Register</span>
        <form>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='E-mail'/>
            <input type="password" placeholder='Password'/>
            <input style={{display:'none'}} type="file" id='file'/>
            <label htmlFor='file'>
                <img src={add}/>
                <span>Add an Avatar</span>
            </label>
            <button>Sign-Up</button>
        </form>
        <p>Already have an Account? Login </p>
      </div>
    </div>
  )
}

export default Register
