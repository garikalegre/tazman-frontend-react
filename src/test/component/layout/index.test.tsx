import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Layout } from '../../../app/view/component/layout';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Layout component', () => {
    it('render correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Layout />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
