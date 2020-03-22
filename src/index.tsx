import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import createStore from './store';

let initalState = {
    recipients: [
        {
            name: "jim",
            budget: 12,
            uuid: "x",
        }

    ],
    gifts: [
        {
            uuid: "pqx",
            name: "LIPBALM",
            year: 2020,
            recipientid: "x",
        }
    ]
}
let store = createStore(initalState);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
