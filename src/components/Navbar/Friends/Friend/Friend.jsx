import React from 'react';
import classes from './Friend.module.css';


const Friend = (props) => {

    return (
        <div className={classes.friends}>
            <div className={classes.friendItem}>
                <img src="https://lh3.googleusercontent.com/proxy/rlNlkWAu962KjEUzm-BmnJPPYbEr6dvj2_tu27YMmQT383Xe6IYelDfyFERxqHPi7ZUWnU9LVhQIi6Ok2dwsdxovqO8n1ifrYzGQWPsa5grTohNmaI1HkPw48z9s3M-6Ik_ARyNvGScgZ6Cxe8xi6NwiEr1QQa_ch_H4JIgnn4K6WzMbFljDzxHInj4Wubw" alt="ava" />
                {props.name}
            </div>
        </div>
    );
}
export default Friend;