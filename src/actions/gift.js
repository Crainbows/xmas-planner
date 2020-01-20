import {CreateUUID} from '../utils/unique';

const ADD_GIFT = 'ADD_GIFT'

const addNewGift = (gift) => {
    console.log('adding item:', gift.name);
    return {
        type: 'add',
        giftid: "gift:"+CreateUUID(),
        recipientid: gift.recipientid,
        name: gift.name,
        cost: gift.cost,
    };
  }

export {
    ADD_GIFT,
    addNewGift,
}