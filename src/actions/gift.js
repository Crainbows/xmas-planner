import {CreateUUID} from '../utils/unique';

const ADD_GIFT = 'ADD_GIFT'
const UPDATE_GIFT = 'UPDATE_GIFT'

const addGift = (gift) => {
    console.log('adding item:', gift.name);
    return {
        type: ADD_GIFT,
        uuid: CreateUUID(),
        recipientuuid: gift.recipientid,
        name: gift.name,
        price: gift.price,
        isPurchased: false,
        isDelivered: false,
        isWrapped: false,
        isMade: false,
    };
}

const updateGift = (gift) => {
    console.log('updating item:', gift.name);
    return {
        type: UPDATE_GIFT,
        uuid: CreateUUID(),
        recipientuuid: gift.recipientid,
        name: gift.name,
        price: gift.price,
        isPurchased: gift.isPurchased,
        isDelivered: gift.isDelivered,
        isWrapped: gift.isWrapped,
        isMade: gift.isMade,
    };
}

export {
    ADD_GIFT,
    UPDATE_GIFT,
    addGift,
    updateGift,
}