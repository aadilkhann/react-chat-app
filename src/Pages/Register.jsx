import React from 'react'
import add from "../img/addAvatar.png"
// import createUserWithEmailAndPassword from "firebase/auth";
// import {auth} from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
      });

  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">chatRio</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Password' />
          <input style={{ display: 'none' }} type="file" id='file' />
          <label htmlFor='file'>
            <img src={add} />
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
