import React from 'react';
import classes from './Friend.module.css';


const Friend = (props) => {

    return (
        <div className={classes.friends}>
            <div className={classes.friendItem}>
                <img src="./images/Lion.jpg" alt="ava" />
                {props.name}
            </div>
        </div>
    );
}
export default Friend;