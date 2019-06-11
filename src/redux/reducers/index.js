import { combineReducers } from 'redux';
import albunsReducer from './albunsReducer';
import buscaReducer from './buscaReducer';

export default combineReducers({
  albunsReducer,
  buscaReducer
});