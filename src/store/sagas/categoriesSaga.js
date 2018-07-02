import { takeEvery, put } from 'redux-saga/effects';
import { GET_ALL_CATEGORIES_ASYNC, SetAllCategories } from '../actions/actionsCategories';
import { getCategoties } from '../../services/categories';

export function* getCategoriesAsync() {
  try {
    const categories = yield getCategoties();
    yield put(SetAllCategories(categories));
  } catch (err) {}
}

export function* watchGetCategoriesAsync() {
  yield takeEvery(GET_ALL_CATEGORIES_ASYNC, getCategoriesAsync);
}

