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
                console.log("newMultipleChoices");
                console.log(newMultipleChoices);
            }else{
                newMultipleChoices.push(id);
                console.log("newMultipleChoices");
                console.log(newMultipleChoices);
            }
            return {...state,
                multipleChoices: newMultipleChoices};
        
        case TYPES.CHANGE_RESULT_MULTIPLE_CHOICES:  
            if((newresult.length>cardFocusId)&&(newresult[cardFocusId]===-1)){
                newresult[cardFocusId] = status;
                console.log("newresult");
                console.log(newresult);
            }else{
                newresult.push(status);
                console.log("newresult");
                console.log(newresult);
            }
            return {...state,
                resultMultipleChoices: newresult};

        case TYPES.CHANGE_CARD_FOCUS:  
            if((newresult.length<=cardFocusId)){
                newresult.push(-1);
                console.log("newresult");
                console.log(newresult);
            }
            if((newMultipleChoices.length<=cardFocusId)){
                newMultipleChoices.push(-1);
                console.log("newMultipleChoices");
                console.log(newMultipleChoices);
            }
            return {...state,
                resultMultipleChoices: newresult};

        default: return {...state};
    }
}

export default multiple_choice;