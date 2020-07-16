import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/1" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Dmytro" id="1" />
                <DialogItem name="Julia" id="2" />
                <DialogItem name="Arina" id="3" />
                <DialogItem name="Alex" id="4" />
                <DialogItem name="Mark" id="5" />
                <DialogItem name="Masha" id="6" />
                
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo!"/>
                
            </div>
        </div >
    );
};

export default Dialogs;