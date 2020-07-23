import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = state.messages.map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
    };

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
                        value={props.dialogPage.newMessageText}
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