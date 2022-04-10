import React from 'react'
import { useChat } from '../context/ChatContext'
import ChatItem from './ChatItem';
import styles from "./styles.module.css"
import ScrollableFeed from 'react-scrollable-feed'

function ChatList() {

    const { messages } = useChat()
    
    return (
        <div className={styles.chatlist}>
            <ScrollableFeed forceScroll={true}>
                {
               messages.map((item,index)=>(
                   <ChatItem item={item} key={index} />
               ))
           } 
            </ScrollableFeed>
           
                
        </div> 
    )
    
}

export default ChatList