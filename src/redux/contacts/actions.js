export const addContact = items => ({
    type: 'contacts/add',
    payload: items,
});

export const changeFilter = items => ({
    type: 'contacts/filter',
    payload: items,
});

export const deleteContact = items => ({
    type: 'contacts/delete',
    payload: items,
});



// import { createAction } from "@reduxjs/toolkit";
// import shortid from 'shortid';

// const addContact = createAction('contacts/add', (name, number) => ({
//     payload: {
//         name,
//         number,
//         id: shortid.generate(),
//     },
// }));

// const changeFilter = createAction('contacts/filter');
// const deleteContact = createAction('contacts/delete');

// export default { addContact, changeFilter, deleteContact };