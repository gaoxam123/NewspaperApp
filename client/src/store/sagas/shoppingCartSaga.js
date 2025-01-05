import { Actions } from '@/redux/reducers/shoppingCartReducer';
import { call, put, take, takeLatest } from 'redux-saga/effects';

function* addShoppingCartItemsSaga(action) {
  yield put(Actions.addShoppingCartItemsSuccess(action.payload));
}

export function* watchShoppingCartSagas() {
  yield takeLatest(Actions.addShoppingCartItems.type, addShoppingCartItemsSaga);
}
