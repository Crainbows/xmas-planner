import {
  TOGGLE_GIFT_DRAWER,
  OPEN_GIFT_DRAWER,
  CLOSE_GIFT_DRAWER,
} from "../actions/giftDrawer";

interface GiftDrawer {
  type: string;
}

export default (state: boolean = false, payload: GiftDrawer) => {
  switch (payload.type) {
    case TOGGLE_GIFT_DRAWER:
      return !state;
    case OPEN_GIFT_DRAWER:
      return true;
    case CLOSE_GIFT_DRAWER:
      return false;
    default:
      return state;
  }
};
