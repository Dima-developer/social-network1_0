import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialog-reducer';
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage,
        messages: state.dialogPage,
        newMessageText: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (message) => {
            dispatch(updateNewMessageTextActionCreator(message))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;