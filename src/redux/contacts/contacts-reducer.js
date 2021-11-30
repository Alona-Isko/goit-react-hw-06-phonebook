import { combineReducers } from 'redux';
import { ADD, FILTER, DELETE } from './contacts-types';

const itemsReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ADD:
            return [...state, payload];
        
        
        default:
            return state;
    }
    // switch (type) {
    //     case ADD:
    //         return state + payload;
        
    //     case FILTER:
    //         return state + payload;
        
    //     case DELETE:
    //         return state - payload;
        
    
    // }
};

const filterReducer = (state = '', action) => {
    return state;
};

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
    