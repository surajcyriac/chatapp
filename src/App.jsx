import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat'



function App() {
  const [user] = useAuthState(auth);
console.log(user);

  return (
    <div className='max-w-[736px] mx-auto text-center bg-black '>
      <section className='flex flex-col h-[100vh] rounded-2xl  shadow-xl border relative bg-no-repeat bg-cover overflow-hidden'style={{backgroundImage:'url(https://i.pinimg.com/736x/6c/78/4f/6c784f07146f1a05372059daff4fdf88.jpg)'}} >
{/* navbar */}
<Navbar></Navbar>
{user ? <Chat /> : null}

      </section>

    </div>
  )
}

export default App
