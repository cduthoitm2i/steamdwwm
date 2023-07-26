import { createStore } from 'redux';

const initialState = {
    counter: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;