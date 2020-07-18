import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.photo}>
                <img src='https://www.krym4you.com/files/catalog/138/gallery/big//chernoe-more_1435752144.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>

        </div>
    );
}
export default ProfileInfo;