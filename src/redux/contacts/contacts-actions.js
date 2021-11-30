import shortid from "shortid";
import { ADD, FILTER, DELETE } from "./contacts-types";

export const addContact = (name, number) => ({
    type: ADD,
    payload: {
        id: shortid.generate(),
        name,
        number,
        completed: false,
    },
});

export const changeFilter = items => ({
    type: FILTER,
    payload: items,
});

export const deleteContact = contactId => ({
    type: DELETE,
    payload: contactId,
});
