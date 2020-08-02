import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    //let state = props.dialogPage;

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} />);

    let newMessageText = props.newMessageText;

    let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
    };

    if(!props.isAuth)return <Redirect to={"/login"} />;
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div></div>
            <div className={classes.add_message}>
                <div className={classes.textArea}>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                              value={newMessageText}
                              className={classes.text_message} placeholder='Enter your message'
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} className={classes.btn}>Send message</button>
                </div>
            </div>
        </div >
    );
};

export default Dialogs;