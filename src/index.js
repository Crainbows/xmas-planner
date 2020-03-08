import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import createStore from './store';

import faker from 'faker';
let store = createStore({recipients:[
    {
        name: faker.name.findName(),
        budget: faker.commerce.price(),
        uuid: "safasfdasfasfd"
    },
    {
        name: faker.name.findName(),
        budget: faker.commerce.price(),
        uuid: "safasfdacccccsfasfd"
    },
    {
        name: faker.name.findName(),
        budget: faker.commerce.price(),
        uuid: "safasfxxxxxdasfasfd"
    }
],
gifts:{
    giftid1: {
        recipientid: "0",
        name: "lipbalm",
        price: faker.commerce.price(),
        year: 2020
    }
}
});
// let store = createStore();

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
