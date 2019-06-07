import { createStandardAction } from 'typesafe-actions';

import { UserLogin } from '../../../api/model/user.login';
import { FacebookLogin } from '../../../api/model/facebook.login';
import * as AuthTypes from './auth.types';

export const loginRequest = createStandardAction(AuthTypes.LOGIN_REQUEST)<
    UserLogin
>();
export const facebookLoginRequest = createStandardAction(
    AuthTypes.LOGIN_FACEBOOK_REQUEST
)<FacebookLogin>();
export const checkAuthRequest = createStandardAction(
    AuthTypes.CHECK_AUTH_REQUEST
)<undefined>();
export const loginFailure = createStandardAction(
    AuthTypes.LOGIN_ERROR
)<Error | null>();
export const loginSuccess = createStandardAction(AuthTypes.LOGIN_SUCCESS)<
    undefined
>();
