import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: "Dmytro" },
        { id: 2, name: "Julia" },
        { id: 3, name: "Arina" },
        { id: 4, name: "Alex" },
        { id: 5, name: "Mark" },
        { id: 6, name: "Masha" }
    ];

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' }
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div >
    );
};

export default Dialogs;