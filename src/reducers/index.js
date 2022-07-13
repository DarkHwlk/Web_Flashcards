import {combineReducers} from 'redux';

/* import reducers */
import cards from './cards';
import tab from './tab';
import multiple_choice from './multiple_choice';
import edit_card from './edit_card';

const myReducer = combineReducers({
    cards,
    tab,
    multiple_choice,
    edit_card,
});

export default myReducer;