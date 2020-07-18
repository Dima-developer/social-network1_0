
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 4 },
            { id: 2, message: "It's my first post", likesCount: 23 }
        ]
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
        ]
    },
    sidebar: {
        friends: [
            { id: 1, name: "Julia" },
            { id: 2, name: "Arina" },
            { id: 3, name: "Mark" }
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;
