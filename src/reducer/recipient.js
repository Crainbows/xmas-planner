import {ADD_RECIPIENT} from '../actions/recipient';

export default(state = [], payload) => {
    switch (payload.type) {
        case ADD_RECIPIENT:
            return {...state,
                    [payload.uuid]: {
                        gid: payload.gid,
                        name: payload.name,
                        budget: payload.budget,
                    }
                };
        default:
            return state;
    }
};
