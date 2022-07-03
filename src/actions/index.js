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
// Change current multiple choice
export const actAddMultipleChoice = (id, cardFocusId) => {  
    return{
        type: TYPES.ADD_MULTIPLE_CHOICES,
        id: id,
        cardFocusId: cardFocusId,
    }
}