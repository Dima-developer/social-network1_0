import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={classes.photo}>
                <img src='https://www.krym4you.com/files/catalog/138/gallery/big//chernoe-more_1435752144.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>

        </div>
    );
}
export default ProfileInfo;