import * as TYPES from '../actions/ActionTypes';
/* Call API get products */
var initialState = {
    cards: [
        {
            id: 1,
            word: "Fish",
            meaning: "The animal can swim",
            rememberRate: 50,
        },
        {
            id: 2,
            word: "Bird",
            meaning: "The animal can fly",
            rememberRate: 50,
        },
        {
            id: 3,
            word: "Parrot",
            meaning: "The bird can speak like human",
            rememberRate: 50,
        },
        {
            id: 4,
            word: "Dog",
            meaning: "The animal is loyal with human",
            rememberRate: 50,
        },
        {
            id: 5,
            word: "Cat",
            meaning: "The animal is lazy and is friend with human",
            rememberRate: 50,
        },
    ],
    cardFocus: {
        id: 1,
        word: "Fish",
        meaning: "The animal can swim",
        rememberRate: 50,
    },
};

const cards = (state = initialState, action) => {
    
    let newCardFocus;
    switch(action.type){
        case TYPES.BACK_MAIN_FLASHCARD:
            if(state.cardFocus.id>1){
                newCardFocus = state.cards[state.cardFocus.id-2];
                return {...state, cardFocus: newCardFocus};
            }
            return {...state};

        case TYPES.NEXT_MAIN_FLASHCARD:
            if(state.cardFocus.id<state.cards.length){
                newCardFocus = state.cards[state.cardFocus.id];
                return {...state, cardFocus: newCardFocus};
            }
            return {...state};

        default: return {...state};
    }
}

export default cards;