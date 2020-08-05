import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    //let state = props.dialogPage;

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>);

    let newMessageText = props.newMessageText;

    /*let newMessageElement = React.createRef();*/

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
};
const AddMessageForm = (props) => {
    return (
        <form className={classes.add_message} onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageText"} placeholder={"Enter your message"} />
            </div>
            <div>
                <button className={classes.btn}>Send message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;