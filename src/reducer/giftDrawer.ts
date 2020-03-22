import {TOGGLE_GIFT_DRAWER} from '../actions/giftDrawer';

interface GiftDrawer {
    type: string
}

export default(state: boolean = false, payload: GiftDrawer) => {
    switch (payload.type) {
        case TOGGLE_GIFT_DRAWER:
            return !state
        default:
            return state;
    }
};
