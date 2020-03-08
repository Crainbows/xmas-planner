import {TOGGLE_DARK_MODE} from '../actions/darkmode';

export default(state = true, payload) => {
    switch (payload.type) {
        case TOGGLE_DARK_MODE:
            return !state
        default:
            return state;
    }
};
