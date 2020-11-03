import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react'
import './Thread.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Thread() {

    const [input, setInput]=useState();

    const sendMessage=(event)=>{

        event.preventDefault();

        setInput('');
    }

    return (
        <div className="thread">

            <div className="thread__header">
                <div className="thread__header__contents">
                    <Avatar/>
                    <div className="thread__header__contents__info">
                        <h4>Thread Name</h4>
                        <h5>Last seen ...</h5>
                    </div>
                </div>
                <IconButton>
                    <MoreHorizIcon className="thread__header__details"/>
                </IconButton>
            </div>
            <div className="thread__messages">

            </div>
            <div className="thread__input">
                <input placeholder='Write a message...' value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                <button onClick={sendMessage} type="submit">Send Message</button>
            </div>
        </div>
    )
}

export default Thread
