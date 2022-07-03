import {combineReducers} from 'redux';

/* import reducers */
import cards from './cards';
import tab from './tab';
import multiple_choice from './multiple_choice';

const myReducer = combineReducers({
    cards,
    tab,
    multiple_choice,
});

export default myReducer;