import { createStore as createReduxStore } from "redux";
import rootReducer, { AppState } from "../reducer";

const saveToLocalStorage = (state: AppState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

let initialState: any = {
  recipients: [
    {
      name: "jim",
      budget: 42,
      uuid: "x",
    },
  ],
  gifts: [
    {
      uuid: "pqx",
      name: "Chocolate",
      year: 2020,
      price: 19.99,
      recipientid: "x",
    },
    {
      uuid: "z",
      name: "Another Lipbalm",
      year: 2020,
      price: 19.99,
      recipientid: "",
    },
    {
      uuid: "fhcvnbcv",
      name: "Grow you own Mushrooms",
      year: 2020,
      price: 19.99,
      recipientid: "x",
    },
    {
      uuid: "asfdas",
      name: "Yet Another Lipbalm",
      year: 2020,
      price: 19.99,
      recipientid: "",
    },
  ],
};

const persistedState = { ...initialState, ...loadFromLocalStorage() };

const store = createReduxStore(
  rootReducer,
  persistedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
