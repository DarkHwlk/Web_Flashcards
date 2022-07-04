import * as TYPES from '../actions/ActionTypes';
/* Call API get products */
var initialState = {
    multipleChoices: [],
    currentMultipleChoice: -1,
    resultMultipleChoices: [],
};

const multiple_choice = (state = initialState, action) => {
    
    let {id, status, cardFocusId} = action;
    
    let newMultipleChoices = state.multipleChoices;
    let newresult = state.resultMultipleChoices;
    switch(action.type){
        case TYPES.CHANGE_CURRENT_MULTIPLE_CHOICES:   
            return {...state,
                    currentMultipleChoice: id};

        case TYPES.CHANGE_MULTIPLE_CHOICES:  
            if((newMultipleChoices.length>cardFocusId)&&(newMultipleChoices[cardFocusId]===-1)){
                newMultipleChoices[cardFocusId] = id;
            }else{
                newMultipleChoices.push(id);
            }
            return {...state,
                multipleChoices: newMultipleChoices};
        
        case TYPES.CHANGE_RESULT_MULTIPLE_CHOICES:  
            if((newresult.length>cardFocusId)&&(newresult[cardFocusId]===-1)){
                newresult[cardFocusId] = status;
            }else{
                newresult.push(status);
            }
            return {...state,
                resultMultipleChoices: newresult};

        case TYPES.CHANGE_CARD_FOCUS:  
            if((newresult.length<=cardFocusId)){
                newresult.push(-1);
            }
            if((newMultipleChoices.length<=cardFocusId)){
                newMultipleChoices.push(-1);
            }
            return {...state,
                resultMultipleChoices: newresult,
                multipleChoices: newMultipleChoices};

        case TYPES.RESET_MULTIPLE_CHOICE:  
            newresult=[];
            newMultipleChoices=[];
            return {currentMultipleChoice: -1,
                resultMultipleChoices: newresult,
                multipleChoices: newMultipleChoices};

        default: return {...state};
    }
}

export default multiple_choice;