import React from 'react';
import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="ava" />
                post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}
export default Post;