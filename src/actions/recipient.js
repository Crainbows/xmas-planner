import {CreateUUID} from '../utils/unique';

const ADD_RECIPIENT = 'ADD_RECIPIENT'

const addNewRecipient = () => {
    return {
        type: 'ADD_RECIPIENT',
        gid: 0, // Set group to zero until groups implemented
        uuid: CreateUUID(),
        name: "Joe Bloggs", //recipient.name,
        budget: 10.00, //recipient.budget,
    };
  }

export {
    ADD_RECIPIENT,
    addNewRecipient,
}