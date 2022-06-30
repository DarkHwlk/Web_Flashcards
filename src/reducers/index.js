import {combineReducers} from 'redux';

/* import reducers */
import cards from './cards';
import tab from './tab';

const myReducer = combineReducers({
    cards,
    tab,
});

export default myReducer;