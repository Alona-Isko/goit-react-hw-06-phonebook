import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";


const addContact = createAction('contacts/add', (name, number) => {
    return {
        payload: {
            id: shortid.generate(),
            name,
            number,
            completed: false,
        },
    }
});

const changeFilter = createAction('contacts/filter');
const deleteContact = createAction('contacts/delete');

export default { addContact, changeFilter, deleteContact };