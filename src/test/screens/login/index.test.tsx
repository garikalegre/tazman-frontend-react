import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { LoginScreen } from '../../../app/view/screen/login';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Login screen', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
