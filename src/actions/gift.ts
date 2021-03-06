import { CreateUUID } from "../utils/unique";
import { Gift } from "../types";

const ADD_GIFT = "ADD_GIFT";
const UPDATE_GIFT = "UPDATE_GIFT";

const addGift = (gift: Partial<Gift>) => {
  // console.log('adding item:', gift.name);
  if (!gift.name) return { type: "FAILED_VALIDATION" };
  return {
    type: ADD_GIFT,
    gift: {
      uuid: CreateUUID(),
      recipientid: gift.recipientid,
      name: gift.name,
      price: gift.price,
      isPurchased: false,
      isDelivered: false,
      isWrapped: false,
      isMade: false,
    },
  };
};

const updateGift = (gift: Partial<Gift>) => {
  // console.log('updating item:', gift.name);
  return {
    type: UPDATE_GIFT,
    gift: {
      uuid: gift.uuid,
      ...gift,
    },
  };
};

export { ADD_GIFT, UPDATE_GIFT, addGift, updateGift };
