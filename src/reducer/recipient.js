import {ADD_RECIPIENT} from '../actions/recipient';

export default(state = [], payload) => {
    switch (payload.type) {
        case ADD_RECIPIENT:
            return Object.assign({}, state, {
                recipients: [
                ...state.recipient,
                {
                    gid: payload.gid,
                    uuid: payload.uuid,
                    name: payload.name,
                    budget: payload.budget,
                }
                ]
            })
        default:
            return state;
    }
};
