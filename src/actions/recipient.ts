import {CreateUUID} from '../utils/unique';

const CREATE_RECIPIENT = 'CREATE_RECIPIENT';
const UPDATE_RECIPIENT = 'UPDATE_RECIPIENT';
const DELETE_RECIPIENT = 'DELETE_RECIPIENT';

type Recipient = {
    uuid: string,
    name: string,
    budget: string,
}

const addNewRecipient = () => {
    return {
        type: CREATE_RECIPIENT,
        gid: 0, // Set group to zero until groups implemented
        uuid: CreateUUID(),
        name: "Joe Bloggs", //recipient.name,
        budget: 10.00, //recipient.budget,
    };
  }

  const updateRecipient = (payload: Recipient) => {
    return {
        type: UPDATE_RECIPIENT,
        uuid: payload.uuid,
        name: payload.name, //recipient.name,
        budget: payload.budget, //recipient.budget,
    };
  }

const deleteRecipient = (uuid: string) => {
    return {
        type: DELETE_RECIPIENT,
        uuid,
    };
}

export {
    CREATE_RECIPIENT,
    UPDATE_RECIPIENT,
    DELETE_RECIPIENT,
    addNewRecipient,
    updateRecipient,
    deleteRecipient,
}