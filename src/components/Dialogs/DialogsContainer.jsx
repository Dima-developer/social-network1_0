import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialog-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
       { (store) => {
            let state = store.getState().dialogPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            };

            let onMessageChange = (message) => {
                let action = updateNewMessageTextActionCreator(message);
                store.dispatch(action)
            };
            return <Dialogs updateNewMessageText={onMessageChange}
                sendMessage={onSendMessageClick} dialogPage={state} />;
        }
    }
    </StoreContext.Consumer>
};

export default DialogsContainer;