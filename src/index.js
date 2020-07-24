import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";



let rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App  /> 
                {/* state={state} dispatch={store.dispatch.bind(store)} store={store} */}
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
