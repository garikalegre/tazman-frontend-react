import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../view/screen/login';
import { AdminScreen } from '../view/screen/admin';

import { PATHS } from './paths';
import { protectedRoute } from './protect.route';
import { authRoute } from './auth.route';

const routes = [
    {
        exact: true,
        path: PATHS.login,
        component: authRoute(LoginScreen)
    },
    {
        exact: true,
        path: PATHS.admin,
        component: protectedRoute(AdminScreen)
    }
];

export const Routes = () => (
    <Switch>
        <Redirect exact from="/" to={PATHS.admin} />
        {routes.map(({ path, exact, component }) => (
            <Route exact={exact} path={path} key={path} component={component} />
        ))}
        <Redirect from="*" to={PATHS.admin} />
    </Switch>
);
