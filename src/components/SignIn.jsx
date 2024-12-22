import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import {auth,provider} from '../firebase'
import {signInWithPopup, signInWithRedirect} from 'firebase/auth'


const SignIn = () => {
  const [value,setvalue]=useState("")
  const googleSignIn = () => {
    // const provider = new GoogleAuthProvider()
    
    signInWithPopup(auth, provider).then((data)=>{
   setvalue(data.user.email)
   localStorage.setItem("email",data.user.email)
    })

  
  }
  return (
    <div className='flex justify-center'>
    <GoogleButton onClick={googleSignIn} />
</div>  )
}

export default SignIn