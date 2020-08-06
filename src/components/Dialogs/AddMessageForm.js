import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../ utilities/validators/validators";

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {

    return (
        <form className={classes.add_message} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required,maxLength(100)]}
                       name={"newMessageText"} placeholder={"Enter your message"} />
            </div>
            <div>
                <button className={classes.btn}>Send message</button>
            </div>
        </form>
    )
}
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)