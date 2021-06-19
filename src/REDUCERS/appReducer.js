import {combineReducers} from 'redux';
import teamsReducer from './teamsReducer';
import playersReducer from './playersReducer'

export default combineReducers({
    teams: teamsReducer,
    players: playersReducer
});