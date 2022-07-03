import * as TYPES from '../actions/ActionTypes';
/* Call API get products */
var initialState = {
    multipleChoices: [2,-1],
    currentMultipleChoice: -1,
};

const multiple_choice = (state = initialState, action) => {
    
    let {id, cardFocusId} = action;
    switch(action.type){
        case TYPES.CHANGE_CURRENT_MULTIPLE_CHOICES:   
            return {...state,
                    currentMultipleChoice: id};

        case TYPES.ADD_MULTIPLE_CHOICES:  
            let newMultipleChoices = state.multipleChoices;
            if((newMultipleChoices.length>cardFocusId)&&(newMultipleChoices[cardFocusId]===-1)){
                newMultipleChoices[cardFocusId] = id;
                console.log(newMultipleChoices);
                return {...state,
                        multipleChoices: newMultipleChoices};
            }else{
                newMultipleChoices.push(id);
                console.log(newMultipleChoices);
                return {...state,
                        multipleChoices: newMultipleChoices};
            }

        default: return {...state};
    }
}

export default multiple_choice;