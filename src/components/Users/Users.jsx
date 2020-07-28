import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.png'

let Users = (props) => {
    let getUsers =() => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
        /*props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.pinimg.com/originals/0e/f2/fb/0ef2fb13f53e1a50271b2e3bc2714a0f.jpg',
                followed: false,
                fullName: 'Dmitrij',
                status: 'I am a full stack developer',
                location: { city: 'Dnipro', country: 'Ukraine' }
            },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/originals/3a/7b/ab/3a7bab297ad092caff498a6ad603a03e.jpg',
                followed: true,
                fullName: 'Alex',
                status: 'I am a front-end developer', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3,
                photoUrl: 'https://i.pinimg.com/originals/5f/04/92/5f0492b310743ddd5b72db51de193054.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a back-end developer',
                location: { city: 'Kiev', country: 'Ukraine' } }
            ])*/
    }
    }
    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>

                </span>

            </span>
            </div>)
        }
    </div>
}

export default Users;