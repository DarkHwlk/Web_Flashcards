import {combineReducers} from 'redux';

/* import reducers */
import cards from './cards';

const myReducer = combineReducers({
    cards,
});

export default myReducer;