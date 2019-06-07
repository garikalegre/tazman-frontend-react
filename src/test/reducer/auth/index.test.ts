import { authReducer } from '../../../app/duck/auth/auth.reducer';
import * as AuthActions from '../../../app/duck/auth/auth.action';
import { initialState } from '../../../app/duck/auth/auth.state';

describe('Auth reducer', () => {
    it('should return state with error', () => {
        const state = authReducer(
            initialState,
            AuthActions.loginFailure(new Error())
        );
        expect(state.error).not.toBeNull();
    });
    it('isAuth should be "true"', () => {
        const expectedState = {
            ...initialState,
            isLoading: false,
            isAuth: true
        };
        const state = authReducer(initialState, AuthActions.loginSuccess());
        expect(state).toEqual(expectedState);
    });
    describe('requests', () => {
        const expectedState = { ...initialState, isLoading: true };
        it('return correct state when invoke loginRequest', () => {
            const data = { email: 'email', password: 'password' };
            const state = authReducer(
                initialState,
                AuthActions.loginRequest(data)
            );
            expect(state).toEqual(expectedState);
        });
        it('return correct state when invoke facebookLoginRequest', () => {
            const data = { facebookId: 'facebookId', token: 'token' };
            const state = authReducer(
                initialState,
                AuthActions.facebookLoginRequest(data)
            );
            expect(state).toEqual(expectedState);
        });
        it('return correct state when invoke facebookLoginRequest', () => {
            const state = authReducer(
                initialState,
                AuthActions.checkAuthRequest()
            );
            expect(state).toEqual(expectedState);
        });
    });
});
