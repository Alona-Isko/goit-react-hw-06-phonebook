import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {addContact, deleteContact, changeFilter} from './contacts-actions';
import contactsItems from '../../contacts.json';


const itemsReducer = createReducer(contactsItems, {
    [addContact]: (state, { payload }) => [...state, payload],
       
    [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
    