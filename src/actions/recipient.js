import {CreateUUID} from '../utils/unique';

const ADD_RECIPIENT = 'ADD_RECIPIENT'

const addNewRecipient = (recipient) => {
    console.log('adding item:', recipient.name);
    return {
        type: 'add',
        gid: 0, // Set group to zero until groups implemented
        uuid: "recipient:"+CreateUUID(),
        name: recipient.name,
        budget: recipient.budget,
    };
  }

export {
    ADD_RECIPIENT,
    addNewRecipient,
}