import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";


export const addContact = createAction('contacts/add', (name, number) => {
    return {
        payload: {
            id: shortid.generate(),
            name,
            number,
            completed: false,
        },
    }
});

export const changeFilter = createAction('contacts/filter');
export const deleteContact = createAction('contacts/delete');
