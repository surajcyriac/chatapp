import React from 'react'
import { auth } from '../firebase'
const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }
    
      return (
        <button onClick={() => auth.signOut()} className='bg-gray-200 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-gray-100'>
            Logout
        </button>
      )
    }

export default LogOut