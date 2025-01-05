import { all, fork } from 'redux-saga/effects';
import { watchShoppingCartSagas } from './shoppingCartSaga';

const rootSaga = function* () {
  yield all([fork(watchShoppingCartSagas)]);
};

export default rootSaga;
