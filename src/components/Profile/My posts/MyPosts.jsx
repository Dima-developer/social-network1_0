import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}>

                    </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
                {/* <Post message={posts[0].message} likesCount={posts[0].likesCount} />
                <Post message={posts[1].message} likesCount={posts[1].likesCount} /> */}

            </div>
        </div>
    );
}
export default MyPosts;