import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './My posts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://www.krym4you.com/files/catalog/138/gallery/big//chernoe-more_1435752144.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}
export default Profile;