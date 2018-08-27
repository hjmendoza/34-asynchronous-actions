import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import thingReducer from '../components/reducer/thing-reducer';

import { reporter }from '../middleware/reporter';


export default createStore(thingReducer, applyMiddleware(thunk, reporter));