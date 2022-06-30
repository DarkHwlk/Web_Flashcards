import * as TYPES from '../actions/ActionTypes';

/* Call API get products */
var initialState = 1;  //id of tab

const tab = (state = initialState, action) => {
    
    let {idTab} = action;
    switch(action.type){
        case TYPES.CHANGE_CURRENT_TAB:
            return idTab;

        default: return state;
    }
}

export default tab;