import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { updateNewPostText } from './components/redux/state.js';
import { updateNewMessageText } from './components/redux/state.js';
import { addPost } from './components/redux/state.js';
import { addMessage } from './components/redux/state.js';

export let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}




