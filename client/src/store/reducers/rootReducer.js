import { combineReducers } from 'redux';
import shoppingCartReducer from './shoppingCartReducer';

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
