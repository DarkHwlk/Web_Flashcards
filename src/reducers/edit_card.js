import * as TYPES from '../actions/ActionTypes';
/* Call API get products */
var initialState = {
    isEditing: -1,  //-1: no show tab | 0: show tab create | >=1 (idCardEditing+1): show tab edit 
    content: {
        word: "",
        meaning: "",
    }
};

const edit_card = (state = initialState, action) => {
    
    let newContent;
    switch(action.type){
        case TYPES.CLOSE_EDIT_BOX:
            newContent = {
                word: "",
                meaning: "",
            };
            return {
                isEditing: -1,
                content: newContent,
            };  
        
        case TYPES.CREATE_EDIT_BOX:
            return {...state, isEditing: 0};  

        case TYPES.EDIT_CARD:
            newContent = action.content;
            return {isEditing: action.idCard+1, content: newContent}; 
        
        case TYPES.CHANGE_CONTENT_EDIT_BOX:
            newContent = action.content;
            return {...state, content: newContent};

        default: return {...state};
    }
}

export default edit_card;