const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: newMessage }]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });


export default dialogsReducer;