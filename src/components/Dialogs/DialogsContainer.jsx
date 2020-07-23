import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialog-reducer';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    };

    let onMessageChange = (message) => {
        let action = updateNewMessageTextActionCreator(message);
        props.store.dispatch(action)
    };

    return (<Dialogs updateNewMessageText={onMessageChange}
        sendMessage={onSendMessageClick} dialogPage={state} />);
};

export default DialogsContainer;