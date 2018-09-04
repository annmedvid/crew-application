import { combineReducers } from 'redux';
import crewReducer from './reducers/crew.reducer';

const rootReducer = combineReducers({
    crew: crewReducer
});

export default rootReducer;
