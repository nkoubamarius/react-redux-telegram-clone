import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './Thread.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { SendRounded } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import db from '../firebase';
import firebase from 'firebase';
import { selectThreadId, selectThreadName } from '../features/threadSlice';
import Message from './Message';

function Thread() {

    const [input, setInput]=useState('');
    const user=useSelector(selectUser);
    const [messages, setMessages]=useState([]);
    const threadName=useSelector(selectThreadName);
    const threadId=useSelector(selectThreadId);

    useEffect(() => {
       if(threadId){
        db.collection('threads').doc(threadId).collection('messages').orderBy('timestamp', 'desc')
        .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map((doc)=>({
            id: doc.id,
            data: doc.data()
        }))))
       }
    }, [threadId]);

    const sendMessage=(event)=>{
        event.preventDefault();
        db.collection('threads').doc(threadId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName
        });

        setInput('');
    }

    return (
        <div className="thread">

            <div className="thread__header">
                <div className="thread__header__contents">
                    <Avatar/>
                    <div className="thread__header__contents__info">
                        <h4>{threadName}</h4>
                        <h5>Last seen ...</h5>
                    </div>
                </div>
                <IconButton>
                    <MoreHorizIcon className="thread__header__details"/>
                </IconButton>
            </div>
            <div className="thread__messages">
                {messages.map(({id, data})=>(
                    <Message key={id} data={data}/>
                ))}
            </div>
            <div className="thread__input">
                <form>
                    <input placeholder='Write a message...' value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                    <IconButton>
                        <TimerOutlinedIcon/>
                    </IconButton>

                    <IconButton onClick={sendMessage}>
                        <SendRounded/>
                    </IconButton>

                    <IconButton >
                        <MicIcon/>
                    </IconButton>
                </form>
            </div>
        </div>
    )
}

export default Thread
