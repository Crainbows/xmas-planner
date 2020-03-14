import {ADD_RECIPIENT, DELETE_RECIPIENT} from '../actions/recipient';

export default(state = {}, payload) => {
    switch (payload.type) {
        case ADD_RECIPIENT:
            return [...state,
                    {
                        uuid: payload.uuid,
                        gid: payload.gid,
                        name: payload.name,
                        budget: payload.budget,
                    }
                ];
        case DELETE_RECIPIENT:
            return state.filter;
        default:
            return state;
    }
};
