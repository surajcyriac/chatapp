import React from 'react'
import { auth } from '../firebase';

const Message = ({ message }) => {
    const style = {
        messege: `flex items-center  m-4 py-2 px-3 rounded-tl-full rounded-tr-full text-lg `,
        name: `absolute mt-[-4rem] pb-2 mb-2 text-white text-s`,
        sent: `bg-[#395dff] text-white   flex-row-reverse text-end float-right rounded-bl-full `,
        received: `bg-[#e5e5ea] text-black  float-left rounded-br-full`,
      };
        const messageClass =()=>{ 
       if( message.uid === auth.currentUser.uid)
         {return style.sent}
       else{return style.received}
        }
        
  return (
    <div  > <div className={`${style.messege} ${messageClass()}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div></div>
  )
}

export default Message