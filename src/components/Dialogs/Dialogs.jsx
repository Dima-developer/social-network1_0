import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }


    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageText(message);
    }
   
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
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogPage.newMessageText}
                        className={classes.text_message}></textarea>
                </div>
                <div>
                    <button onClick={addMessage} className={classes.btn}>Add message</button>
                </div>
            </div>
        </div >
    );
};

export default Dialogs;