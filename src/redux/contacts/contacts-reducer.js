import { combineReducers } from 'redux';
import { addContact, changeFilter, deleteContact } from './contacts-actions';


const itemsReducer = (state = [], {type, payload}) => {
    switch (type) {
        case addContact:
            return [...state, payload];
        
        case deleteContact:
            return state.filter(({id}) => id !== payload);
         
        default:
            return state;
    }
};

const filterReducer = (state = '', {type, payload}) => {
    switch (type) {
        case changeFilter:
            return payload;
         
        default:
            return state;
    }
};

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
    