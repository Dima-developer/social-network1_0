const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://i.pinimg.com/originals/0e/f2/fb/0ef2fb13f53e1a50271b2e3bc2714a0f.jpg',
            followed: false, fullName: 'Dmitrij', status: 'I am a full stack developer', location: { city: 'Dnipro', country: 'Ukraine' } },
        { id: 2, photoUrl: 'https://i.pinimg.com/originals/3a/7b/ab/3a7bab297ad092caff498a6ad603a03e.jpg',
            followed: true, fullName: 'Alex', status: 'I am a front-end developer', location: { city: 'Moscow', country: 'Russia' } },
        { id: 3, photoUrl: 'https://i.pinimg.com/originals/5f/04/92/5f0492b310743ddd5b72db51de193054.jpg',
            followed: false, fullName: 'Andrew', status: 'I am a back-end developer', location: { city: 'Kiev', country: 'Ukraine' } },
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;