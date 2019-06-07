import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routing/route';
import { Layout } from './view/component/layout';

import { store } from './store/store.factory';

export const App: FC = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes />
            </Layout>
        </Router>
    </Provider>
);
