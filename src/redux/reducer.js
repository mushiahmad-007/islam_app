import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import homeReducer from './homeReducer'
import surahReducer from './surahReducer'
import hadithReducer from './hadithReducer'
export default combineReducers({
  // ## Generator Reducers  
  homeReducer,
  surahReducer,
  hadithReducer,
});
