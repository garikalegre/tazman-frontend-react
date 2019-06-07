import { put, call, take, all, takeEvery } from 'redux-saga/effects';

import * as AuthActions from './auth.action';
import * as AuthTypes from './auth.types';
import { login } from '../../../api';
import {
    deleteFromStorage,
    getFromStorage,
    setToStorage
} from '../../../utils';

export function* loginSaga() {
    while (true) {
        try {
            let response;
            const action = yield take([
                AuthTypes.LOGIN_REQUEST,
                AuthTypes.LOGIN_FACEBOOK_REQUEST
            ]);
            response = yield call(login, action.payload);
            yield call(setToStorage, 'auth_token', response.token);
            yield put(AuthActions.loginSuccess());
        } catch (err) {
            yield call(deleteFromStorage, 'auth_token');
            yield put(AuthActions.loginFailure(err));
        }
    }
}

export function* checkAuthSaga() {
    const token = yield call(getFromStorage, 'auth_token');
    if (token) yield put(AuthActions.loginSuccess());
    else yield put(AuthActions.loginFailure(null));
}

export function* authSaga() {
    yield all([
        loginSaga(),
        takeEvery(AuthTypes.CHECK_AUTH_REQUEST, checkAuthSaga)
    ]);
}
