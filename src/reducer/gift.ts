import { UPDATE_GIFT, ADD_GIFT } from "../actions/gift";
import { Gift } from "../types";

interface GiftAction {
  type: string;
  gift: Gift;
}

export default (state: Gift[] = [], payload: GiftAction): Gift[] => {
  switch (payload.type) {
    case UPDATE_GIFT:
      const index = state.findIndex(
        (gift: Gift) => gift.uuid === payload.gift.uuid
      );
      return [
        ...state.slice(0, index),
        { ...state[index], ...payload.gift },
        ...state.slice(index + 1, state.length),
      ];
    case ADD_GIFT:
      return [
        ...state,
        {
          uuid: payload.gift.uuid,
          recipientid: payload.gift.recipientid,
          name: payload.gift.name,
          year: payload.gift.year,
          price: payload.gift.price,
          isPurchased: payload.gift.isPurchased, //dollar
          isDelivered: payload.gift.isDelivered, //box
          isWrapped: payload.gift.isWrapped, //compressed
          isMade: payload.gift.isMade, //build
        },
      ];
    default:
      return state;
  }
};
