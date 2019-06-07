import { all } from 'redux-saga/effects';

import { authSaga } from '../duck/auth/auth.saga';

export function* rootSaga() {
    yield all([authSaga()]);
}
