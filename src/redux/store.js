import { createStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/reducer';

const initialState = {
    contacts: {
        items: [],
        filter: '',
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'contacts/add':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items + payload,
                }
            };
        
        case 'contacts/filter':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items - payload,
                }
            };
        
        case 'contacts/delete':
            return {

            };
        
        default:
            return state;
    }
};
    
const store = createStore(reducer);

export default store;
