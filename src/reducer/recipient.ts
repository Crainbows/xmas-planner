import {CREATE_RECIPIENT, UPDATE_RECIPIENT, DELETE_RECIPIENT} from '../actions/recipient';
import { Recipient } from '../types/';

export default (state: Recipient[] = [], payload: Recipient) : Recipient[] => {
    switch (payload.type) {
        case CREATE_RECIPIENT:
            return [...state,
                    {
                        uuid: payload.uuid,
                        gid: payload.gid,
                        name: payload.name,
                        budget: payload.budget,
                    }
                ];
        case UPDATE_RECIPIENT:
            console.debug(payload);
            return state.map( (item: Recipient) => {
                if (item.uuid === payload.uuid) {
                    return {
                        uuid: item.uuid,
                        gid: item.gid,
                        name: payload.name,
                        budget: payload.budget,
                    };
                } else {
                    return item;
                }
            });
        case DELETE_RECIPIENT:
            return state.filter((recipient: Recipient) => recipient.uuid !== payload.uuid);
        default:
            return state;
    }
};
