import {CreateUUID} from '../utils/unique';

const ADD_RECIPIENT = 'ADD_RECIPIENT';
const DELETE_RECIPIENT = 'DELETE_RECIPIENT';

const addNewRecipient = () => {
    return {
        type: ADD_RECIPIENT,
        gid: 0, // Set group to zero until groups implemented
        uuid: CreateUUID(),
        name: "Joe Bloggs", //recipient.name,
        budget: 10.00, //recipient.budget,
    };
  }

const deleteRecipient = (uuid) => {
    return {
        type: DELETE_RECIPIENT,
        uuid,
    };
}

export {
    ADD_RECIPIENT,
    DELETE_RECIPIENT,
    addNewRecipient,
    deleteRecipient,
}