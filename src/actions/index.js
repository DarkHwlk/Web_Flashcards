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