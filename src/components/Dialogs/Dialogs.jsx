import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialog-reducer';



const Dialogs = (props) => {



    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        //props.addMessage();
        props.dispatch(sendMessageActionCreator())
    };


    let onMessageChange = (e) => {
        let message = e.target.value;
        //let message = newMessageElement.current.value;
        // props.updateNewMessageText(message);
        let action = updateNewMessageTextActionCreator(message);
        props.dispatch(action)
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
                    <button onClick={sendMessage} className={classes.btn}>Send message</button>
                </div>
            </div>
        </div >
    );
};

export default Dialogs;