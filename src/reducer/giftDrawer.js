import {TOGGLE_GIFT_DRAWER} from '../actions/giftDrawer';

export default(state = false, payload) => {
    switch (payload.type) {
        case TOGGLE_GIFT_DRAWER:
            return !state
        default:
            return state;
    }
};
