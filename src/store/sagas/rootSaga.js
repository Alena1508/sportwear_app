import { all } from 'redux-saga/effects';

import { watchUser, watchLoginUser, watchlogoutUser, watchUpdateUserAsync } from './userSaga';
import { watchGetCategoriesAsync } from './categoriesSaga';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser(),
    watchlogoutUser(),
    watchUpdateUserAsync(),
    watchGetCategoriesAsync()
  ]);
}
