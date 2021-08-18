import React from 'react'
import './chatbot.scss'
import { useState, useEffect, useRef } from "react";
import axios from 'axios'
import {parseString} from 'xml2js'

export default function ChatBot() {
    const [messages, setMessages] = useState([{by_me: true, message: "Hi, how can I help you?"}, {by_me: false, message: "Hi, how can I help you?"},]);
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);
    
    const getMessages = () => {
        return messages.map(mes => 
            (<span className={"message " + (mes.by_me && "by_me")}>
                {mes.message}
               
            </span>)
        );
    }

    const handleMessage = (e) => {
        e.preventDefault();
        let mes = e.target.elements.box.value;
        e.target.elements.box.value = "";
        e.target.elements.box.focus();
        if (mes){
            setMessages([...messages, {by_me: true, message: mes}]);

            axios.get("https://botlibre.com/rest/api/form-chat?instance=39811152&message=" + mes + "&application=4800655344692746846")
            .then(res => {
                if (res.status === 200){
                    
                    parseString(res.data, function (err, result) {
                        setMessages([...messages, {by_me: true, message: mes}, {by_me: false, message: result.response.message[0]}]);
                    });
                }
            });
        }
    }

    return (

        <div className="chatBot">
            <div className="messagesWrapper">
                <div className="messageContainer" id="messageContainer">
                    {getMessages()}
                </div>
                <div ref={messagesEndRef}></div>
            </div>
            
            <div className="messageBox">
            <form autocomplete="off" onSubmit={handleMessage}>
                <input id="box" type="text" placeholder="Type your message here" />
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
    )
}
