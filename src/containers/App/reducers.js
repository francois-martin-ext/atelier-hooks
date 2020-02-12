import { combineReducers } from 'redux';
import { appDuck } from './AppDuck';

export default combineReducers({
    [appDuck.store]: appDuck.reducer,
});