import recipients from './recipient';
import gifts from './gift';
import darkmode from './darkmode';
import year from './year';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    darkmode,
    recipients,
    gifts,
    year,
});
export default rootReducer;