import React, { useEffect } from 'react'
import { init, subscribeChat , subscribeInitialMessages } from '../socketApi'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {useChat} from "../context/ChatContext";

function Container() {

  const {setMessages} = useChat();
  useEffect(()=>{
       init();
       
       subscribeChat((message)=>{
        setMessages(prevState=>[...prevState,{message}])
       });

       subscribeInitialMessages((messages)=>{
         setMessages(messages)
       })
  },[])
  return (
    <div className='App'>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container