import { call, put, take } from 'redux-saga/effects';
import { loginSaga, checkAuthSaga } from '../../../app/duck/auth/auth.saga';
import * as AuthActions from '../../../app/duck/auth/auth.action';
import * as AuthTypes from '../../../app/duck/auth/auth.types';
import { login } from '../../../api';
import { getFromStorage } from '../../../utils';

describe('Auth sagas', () => {
    describe('login', () => {
        it('should login with email and password', () => {
            const action = AuthActions.loginRequest({
                email: 'email',
                password: 'password'
            });
            const gen = loginSaga();
            expect(gen.next().value).toEqual(
                take([
                    AuthTypes.LOGIN_REQUEST,
                    AuthTypes.LOGIN_FACEBOOK_REQUEST
                ])
            );
            gen.next(action);
            gen.next(action);
            expect(gen.next().value).toEqual(put(AuthActions.loginSuccess()));
        });
        it('should login with facebook', () => {
            const action = AuthActions.facebookLoginRequest({
                facebookId: 'facebookId',
                token: 'token'
            });
            const gen = loginSaga();
            expect(gen.next().value).toEqual(
                take([
                    AuthTypes.LOGIN_REQUEST,
                    AuthTypes.LOGIN_FACEBOOK_REQUEST
                ])
            );
            gen.next(action);
            gen.next(action);
            expect(gen.next().value).toEqual(put(AuthActions.loginSuccess()));
        });
    });
    describe('check auth', () => {
        it('should return token', () => {
            const gen = checkAuthSaga();
            expect(gen.next().value).toEqual(
                call(getFromStorage, 'auth_token')
            );
        });
        it('should invoke loginSuccess', () => {
            const gen = checkAuthSaga();
            gen.next();
            expect(gen.next('token').value).toEqual(
                put(AuthActions.loginSuccess())
            );
        });
        it('should invoke loginFailure', () => {
            const gen = checkAuthSaga();
            gen.next();
            expect(gen.next(null).value).toEqual(
                put(AuthActions.loginFailure(null))
            );
        });
    });
});
