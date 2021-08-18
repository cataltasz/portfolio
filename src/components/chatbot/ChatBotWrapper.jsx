import React from 'react'
import ChatBot from './ChatBot'
import { useState } from "react";
import './chatbot.scss'


export default function ChatBotWrapper() {

    const [open, setOpen] = useState(false);

    const handleTopClick = (e) => {
        setOpen(!open);
    }

    return (
        <div className={"cbLeftWrapper " + (open && "active")}>
            <div className="top" onClick={handleTopClick}><span>ChatBot</span></div>
            <div style={ !open ? {display: 'none'} : {}}> <ChatBot /> </div>
            
        </div>
    )
}
