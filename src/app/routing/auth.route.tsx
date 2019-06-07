import React, { ComponentType, FC } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

type Props = {
    isAuth: boolean;
};
export const authRoute = (Component: ComponentType<any>) => {
    const Wrapper: FC<Props> = ({ isAuth }) => {
        if (!isAuth) return <Component />;
        return <Redirect to="/" />;
    };

    const mapStateToProps = (state: any) => ({ isAuth: state.auth.isAuth });
    return connect(mapStateToProps)(Wrapper);
};
