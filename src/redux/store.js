import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import tripReducer from './tripReducer';

const rootReducer = combineReducers({
    reducer,
    tripReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));