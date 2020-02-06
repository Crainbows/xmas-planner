import {INCREMENT_YEAR, DECREMENT_YEAR} from '../actions/year';

export default(state = new Date().getFullYear(), payload) => {
    switch (payload.type) {
        case INCREMENT_YEAR:
            return state+1
        case DECREMENT_YEAR:
            return state-1
        default:
            return state;
    }
};
