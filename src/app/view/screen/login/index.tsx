import React, { FC } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

import { LoginForm } from '../../component/login-form';

import * as AuthActions from '../../../duck/auth/auth.action';
import { RootActions } from '../../../model/types';
import { UserLogin } from '../../../../api/model/user.login';
import { FacebookLogin as TFacebookLogin } from '../../../../api/model/facebook.login';

type Props = {
    loginRequest: (formData: UserLogin) => void;
    loginWithFacebook: (formData: TFacebookLogin) => void;
};

const Login: FC<Props> = ({ loginRequest, loginWithFacebook }) => {
    const handleSubmit = (formData: UserLogin) => loginRequest(formData);
    const handleResponseFacebook = ({
        id,
        accessToken
    }: ReactFacebookLoginInfo) =>
        loginWithFacebook({ facebookId: id, token: accessToken });
    const handleFailFacebook = (err: any) => console.error(err);

    return (
        <section className="login-screen">
            <div>
                <LoginForm onSubmit={handleSubmit} />
            </div>
            <div>
                <FacebookLogin
                    appId={process.env.REACT_APP_FACEBOOK_ID as string}
                    autoLoad={true}
                    callback={handleResponseFacebook}
                    onFailure={handleFailFacebook}
                    cssClass="facebook-login-button"
                />
            </div>
        </section>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    loginRequest: (formData: UserLogin) =>
        dispatch(AuthActions.loginRequest(formData)),
    loginWithFacebook: (formData: TFacebookLogin) =>
        dispatch(AuthActions.facebookLoginRequest(formData))
});

export const LoginScreen = connect(
    null,
    mapDispatchToProps
)(Login);
