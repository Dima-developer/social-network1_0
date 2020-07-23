import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 4 },
                { id: 2, message: "It's my first post", likesCount: 23 }
            ],
            newPostText: 'IT-kamasutra!'

        },
        dialogPage: {
            dialogs: [
                { id: 1, name: "Dmytro" },
                { id: 2, name: "Julia" },
                { id: 3, name: "Arina" },
                { id: 4, name: "Alex" },
                { id: 5, name: "Mark" },
                { id: 6, name: "Masha" }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' }
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                { id: 1, name: "Julia" },
                { id: 2, name: "Arina" },
                { id: 3, name: "Mark" }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {

        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // _addPost() {

    //     let newPost = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // _updateNewPostText(newText) {

    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // _addMessage() {

    //     let newMessage = {
    //         id: 5,
    //         message: this._state.dialogPage.newMessageText,

    //     };
    //     this._state.dialogPage.messages.push(newMessage);
    //     this._state.dialogPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // _updateNewMessageText(newMessage) {

    //     this._state.dialogPage.newMessageText = newMessage;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
};


export default store;
window.store = store;