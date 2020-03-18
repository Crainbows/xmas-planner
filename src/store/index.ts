import { createStore } from 'redux';
import rootReducer from  '../reducer';
export default(initialState?: any) => {
    return createStore(rootReducer, initialState, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
}