import React from 'react';
import state from './components/redux/state.js';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { updateNewPostText } from './components/redux/state.js';
import { updateNewMessageText } from './components/redux/state.js';
import { addPost } from './components/redux/state.js';
import { addMessage } from './components/redux/state.js';
import { subscribe } from './components/redux/state.js';

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
