import * as AuthActions from '../../../app/duck/auth/auth.action';
import * as AuthTypes from '../../../app/duck/auth/auth.types';

describe('Auth actions', () => {
    it(`creates a ${AuthTypes.LOGIN_REQUEST} action`, () => {
        expect(
            AuthActions.loginRequest({ email: 'email', password: 'password' })
        ).toMatchSnapshot();
    });
    it(`creates a ${AuthTypes.CHECK_AUTH_REQUEST} action`, () => {
        expect(AuthActions.checkAuthRequest()).toMatchSnapshot();
    });
    it(`creates a ${AuthTypes.LOGIN_FACEBOOK_REQUEST} action`, () => {
        expect(
            AuthActions.facebookLoginRequest({
                facebookId: 'facebookId',
                token: 'token'
            })
        ).toMatchSnapshot();
    });
    it(`creates a ${AuthTypes.LOGIN_SUCCESS} action`, () => {
        expect(AuthActions.loginSuccess()).toMatchSnapshot();
    });
    it(`creates a ${AuthTypes.LOGIN_ERROR} action`, () => {
        expect(AuthActions.loginFailure(new Error())).toMatchSnapshot();
    });
});
