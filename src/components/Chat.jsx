import React, { useEffect, useRef, useState } from 'react'
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import Message from './Message';
import SendMessage from './SendMessage';


const Chat = () => {
        const [messages, setMessages] = useState([]);
        const scroll = useRef();
      
        useEffect(() => {
          const q = query(collection(db, 'messages'), orderBy('timestamp'));
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
              messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
          });
          return () => unsubscribe();
        }, []);
        console.log("hi",messages);
        console.log(db);
        
        

    
  return (
    <div>  <main className='flex flex-col p-[10px]'>
    {messages &&
      messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
  </main>
  <SendMessage scroll={scroll} />
  <span ref={scroll}></span>
  </div>
  )
}

export default Chat