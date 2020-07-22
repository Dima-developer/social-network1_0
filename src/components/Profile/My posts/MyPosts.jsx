import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

// let addPostActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     }
// };
// let updateNewPostTextActionCreator = (text) => {
//     return { type: 'UPDATE-NEW-POST-TEXT', newText: text }
// }

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();
    //;
    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }
    //debugger;
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text)
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

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
                    <button onClick={addPost}>Add post</button>
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