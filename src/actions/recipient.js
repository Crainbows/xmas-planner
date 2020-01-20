import {CreateUUID} from '../utils/unique';

const ADD_RECIPIENT = 'ADD_RECIPIENT'

const addNewRecipient = (recipient) => {
    console.log('adding item:', recipient.name);
    return {
        type: 'add',
        gid: 0, // Set group to zero until groups implemented
        uuid: "recipient:"+CreateUUID(),
        name: "Joe Bloggs", //recipient.name,
        budget: 50.00, //recipient.budget,
    };
  }

export {
    ADD_RECIPIENT,
    addNewRecipient,
}