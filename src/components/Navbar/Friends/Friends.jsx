import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';


const Friends = (props) => {
    
    let friend = props.friends.map(f => <Friend name={f.name} avatar={f.avatar} />);
    return (
        <div>
            <div className={classes.friends}>
                Friends
            </div>
            { friend }
        </div>
    );
}
export default Friends;