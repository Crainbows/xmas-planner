import {UPDATE_GIFT, ADD_GIFT} from '../actions/gift';
import { Gift } from '../types'

export default (state: Gift[] = [], payload: Gift) : Gift[] => {
    switch (payload.type) {
        case UPDATE_GIFT:
        case ADD_GIFT:
            return [...state,
                    {
                        uuid: payload.uuid,
                        recipientid: payload.recipientid,
                        name: payload.name,
                        year: payload.year,
                        price: payload.price,
                        isPurchased: payload.isPurchased,
                        isDelivered: payload.isDelivered,
                        isWrapped: payload.isWrapped,
                        isMade: payload.isMade,
                    }
            ];
        default:
            return state;
    }
};
