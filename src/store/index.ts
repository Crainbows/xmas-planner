import { createStore as createReduxStore } from 'redux';
import rootReducer, { AppState } from  '../reducer';


const saveToLocalStorage = (state: AppState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.warn(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

let initialState: any = {
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

const persistedState = Object.assign(initialState, loadFromLocalStorage());

const store = createReduxStore(
    rootReducer,
    persistedState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => saveToLocalStorage(store.getState()));



export default store;