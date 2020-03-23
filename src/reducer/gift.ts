import { UPDATE_GIFT, ADD_GIFT } from "../actions/gift";
import { Gift } from "../types";

interface GiftAction extends Gift {
  type: string;
}

export default (state: Gift[] = [], payload: GiftAction): Gift[] => {
  switch (payload.type) {
    case UPDATE_GIFT:
    case ADD_GIFT:
      return [
        ...state,
        {
          uuid: payload.uuid,
          recipientid: payload.recipientid,
          name: payload.name,
          year: payload.year,
          price: payload.price,
          isPurchased: payload.isPurchased, //dollar
          isDelivered: payload.isDelivered, //box
          isWrapped: payload.isWrapped, //compressed
          isMade: payload.isMade //build
        }
      ];
    default:
      return state;
  }
};
