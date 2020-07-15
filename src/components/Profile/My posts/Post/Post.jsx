import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {


    return (
        <div className={classes.item}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="ava" />
            { props.message }
            <div>
                <span>Like</span> { props.LikesCount }
            </div>
        </div>
    );
}
export default Post;