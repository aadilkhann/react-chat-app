import React, { useState } from 'react'
import add from "../img/addAvatar.png"
// import createUserWithEmailAndPassword from "firebase/auth";
import { storage, auth, db } from '../firebase'
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDownloadURL } from 'firebase/storage';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


const Register = () => {
  let [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    // console.log(e.target[0].value)
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // const auth = getAuth();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);



      // const storage = getStorage();
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          setErr(true);
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            });

            await setDoc(doc(db,"user",res.user.uid),{
              uid:res.user.uid,
              displayName,
              email,
              photoURL:downloadURL
            });
            console.log(res.user.uid)

          });
        }
      );
    }
    catch (err) {
      setErr(true)
    }

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
            <img src={add} alt="add" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign-Up</button>
          {err && <span>Something Went Wrong</span>}
        </form>
        <p>Already have an Account? Login </p>
      </div>
    </div>
  )
}

export default Register
