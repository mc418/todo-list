import todo from './todo';
import filter from './filter';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    todo,
    filter
});

export default reducers;