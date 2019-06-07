import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootActions, RootState } from '../../../model/types';
import * as AuthActions from '../../../duck/auth/auth.action';
import { Spinner } from '../spinner';

type Props = {
    checkAuth: () => void;
    isLoading: boolean;
};
const LayoutComponent: FC<Props> = ({ children, checkAuth, isLoading }) => {
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);
    return <main>{isLoading ? <Spinner /> : children}</main>;
};

const mapStateToProps = (state: RootState) => ({
    isLoading: state.auth.isLoading
});
const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    checkAuth: () => dispatch(AuthActions.checkAuthRequest())
});
export const Layout = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutComponent);
