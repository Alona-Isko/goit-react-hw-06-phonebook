import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import contactsItems from '../../contacts.json';


const itemsReducer = createReducer([contactsItems], {
    [actions.addContact]: (state, { payload }) =>
        [...state, payload],
    
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
    