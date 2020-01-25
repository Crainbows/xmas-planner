import {ADD_RECIPIENT} from '../actions/recipient';

export default(state = [], payload) => {
    switch (payload.type) {
        case ADD_RECIPIENT:
            return [...state,
                    {
                        gid: payload.gid,
                        uuid: payload.uuid,
                        name: payload.name,
                        budget: payload.budget,
                    }
                ]
            
        default:
            return state;
    }
};
