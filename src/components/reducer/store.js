import { createStore } from 'redux';

const initialState = {
    counter: 0,
    texte: "Red",
};

// Création d'une constante rootReducer
const rootReducer = (state = initialState, action) => {
    // On va créer plusieurs switch en fonction des actions à réaliser (incrémentation, décrémentation)
    switch (action.type) {
        case 'INCREMENT':
            return {
                // Opérateur de spread (état et cycle de vie)
                ...state,
                counter: state.counter + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            };
        case 'CHANGETEXT':
            return {
                ...state,
                texte: state.texte === "Blue" ? "Red" : "Blue",
            };

        default:
            return state;
    }
};

// Définit une action (voir ligne 8)
const store = createStore(rootReducer);

export default store;