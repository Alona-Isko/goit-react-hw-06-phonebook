import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const itemsReducer = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, {payload}) => state.filter(({id}) => id !== payload),
});

const filterReducer = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
});



export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
    


// const itemsReducer = (state = [], {type, payload}) => {
//     switch (type) {
//         case addContact:
//             return [...state, payload];
        
//         case deleteContact:
//             return state.filter(({id}) => id !== payload);
         
//         default:
//             return state;
//     }
// };

// const filterReducer = (state = '', {type, payload}) => {
//     switch (type) {
//         case actions.changeFilter:
//             return payload;
         
//         default:
//             return state;
//     }
// };