import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';



const SendMessage = ({scroll}) => {
    const style = {
        form: `h-14 w-full max-w-[736px]  flex text-xl absolute bottom-0 `,
        input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-nonerounded-2xl`,
        button: `w-[20%] bg-green-500 font-semibold text-white`,
      };
      const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }
      
  return (
    <div  ><form onSubmit={sendMessage} className={style.form}>
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className={style.input}
      type='text'
      placeholder='Message'
    />
    <button className={style.button} type='submit'>
      Send
    </button>
  </form></div>
  )
}

export default SendMessage