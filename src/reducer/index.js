import recipients from './recipient';
import gifts from './gift';
import year from './year';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    recipients,
    gifts,
    year,
});
export default rootReducer;