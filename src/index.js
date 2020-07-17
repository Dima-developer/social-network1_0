import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 4 },
  { id: 2, message: "It's my first post", likesCount: 23 },
];
let dialogs = [
  { id: 1, name: "Dmytro" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Arina" },
  { id: 4, name: "Alex" },
  { id: 5, name: "Mark" },
  { id: 6, name: "Masha" }
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your it-kamasutra?' },
  { id: 3, message: 'Yo' }
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
