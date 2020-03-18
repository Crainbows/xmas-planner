import {UPDATE_GIFT, ADD_GIFT} from '../actions/gift';

interface Gift {
    type: string,
    uuid: string,
    recipientid: string,
    name: string,
    year: number,
    price: number,
    isPurchased: boolean,
    isDelivered: boolean,
    isWrapped: boolean,
    isMade: boolean,
}

export default(state = [], payload: Gift) => {
    switch (payload.type) {
        case UPDATE_GIFT:
        case ADD_GIFT:
            return {...state,
                    [payload.uuid]: {
                        recipientuuid: payload.recipientid,
                        name: payload.name,
                        year: payload.year,
                        price: payload.price,
                        isPurchased: payload.isPurchased,
                        isDelivered: payload.isDelivered,
                        isWrapped: payload.isWrapped,
                        isMade: payload.isMade,
                    }
                };
        default:
            return state;
    }
};
