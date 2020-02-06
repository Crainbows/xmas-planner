import recipients from './recipient';
import year from './year';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    recipients,
    year,
});
export default rootReducer;