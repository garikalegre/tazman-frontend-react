import { Actions, State, initialState } from './auth.state';
import * as AuthTypes from './auth.types';

export const authReducer = (
    state: State = initialState,
    action: Actions
): State => {
    switch (action.type) {
        case AuthTypes.LOGIN_REQUEST:
        case AuthTypes.LOGIN_FACEBOOK_REQUEST:
        case AuthTypes.CHECK_AUTH_REQUEST:
            return { ...state, isAuth: false, isLoading: true, error: null };
        case AuthTypes.LOGIN_SUCCESS:
            return { ...state, isAuth: true, isLoading: false, error: null };
        case AuthTypes.LOGIN_ERROR:
            const error = action.payload;
            return { ...state, isAuth: false, isLoading: false, error };
        default:
            return state;
    }
};
