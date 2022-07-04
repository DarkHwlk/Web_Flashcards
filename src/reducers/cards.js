import * as TYPES from '../actions/ActionTypes';
/* Call API get products */
var initialState = {
    cards: [
        {
            id: 0,
            word: "Fish",
            meaning: "The animal can swim",
            rememberRate: 50,
        },
        {
            id: 1,
            word: "Bird",
            meaning: "The animal can fly",
            rememberRate: 50,
        },
        {
            id: 2,
            word: "Parrot",
            meaning: "The bird can speak like human",
            rememberRate: 50,
        },
        {
            id: 3,
            word: "Dog",
            meaning: "The animal is loyal with human",
            rememberRate: 50,
        },
        {
            id: 4,
            word: "Cat",
            meaning: "The animal is lazy and is friend with human",
            rememberRate: 50,
        },
    ],
    cardFocus: {
        id: 0,
        word: "Fish",
        meaning: "The animal can swim",
        rememberRate: 50,
    },
};

const cards = (state = initialState, action) => {
    
    let newCardFocus;
    switch(action.type){
        case TYPES.BACK_MAIN_FLASHCARD:
            if(state.cardFocus.id>0){
                newCardFocus = state.cards[state.cardFocus.id-1];
                return {...state, cardFocus: newCardFocus};
            }else{
                console.log("Can not back");
            }
            return {...state};

        case TYPES.NEXT_MAIN_FLASHCARD:
            if(state.cardFocus.id<state.cards.length-1){
                newCardFocus = state.cards[state.cardFocus.id+1];
                return {...state, cardFocus: newCardFocus};
            }else{
                console.log("Can not next");
            }
            return {...state};

        case TYPES.RESET_CARD_FOCUS:  
            newCardFocus = state.cards[0];
            return {...state, cardFocus: newCardFocus};

        default: return {...state};
    }
}

export default cards;