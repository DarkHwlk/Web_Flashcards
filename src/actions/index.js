import * as TYPES from './ActionTypes'

/* actions main flashcard */
// Back Main Flashcard
export const actBackMainFlashcard = () => {  
    return{
        type: TYPES.BACK_MAIN_FLASHCARD,
    }
}
// Next Main Flashcard
export const actNextMainFlashcard = () => {  
    return{
        type: TYPES.NEXT_MAIN_FLASHCARD,
    }
}
// Reset card focus
export const actResetCardFocus = () => {  
    return{
        type: TYPES.RESET_CARD_FOCUS,
    }
}


/* actions tabs */
// Change current tab
export const actChangeCurrentTab = (idTab) => {  
    return{
        type: TYPES.CHANGE_CURRENT_TAB,
        idTab: idTab,
    }
}

/* actions multiple choice */
// Change current multiple choice
export const actChangeCurrentMultipleChoice = (id) => {  
    return{
        type: TYPES.CHANGE_CURRENT_MULTIPLE_CHOICES,
        id: id,
    }
}
// Change multiple choice
export const actChangeMultipleChoice = (id, cardFocusId) => {  
    return{
        type: TYPES.CHANGE_MULTIPLE_CHOICES,
        id: id,
        cardFocusId: cardFocusId,
    }
}
// Change result multiple choice
export const actChangeResultMultipleChoice = (status, cardFocusId) => {  
    return{
        type: TYPES.CHANGE_RESULT_MULTIPLE_CHOICES,
        status: status,
        cardFocusId: cardFocusId,
    }
}
// Change card focus
export const actChangeCardFocus = (cardFocusId) => {  
    return{
        type: TYPES.CHANGE_CARD_FOCUS,
        cardFocusId: cardFocusId,
    }
}
// Reset multiple hoice
export const actResetMultipleChoice = () => {  
    return{
        type: TYPES.RESET_MULTIPLE_CHOICE,
    }
}