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