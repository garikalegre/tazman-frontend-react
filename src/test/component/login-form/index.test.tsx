import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../../app/view/component/login-form';

describe('Login Form component', () => {
    it('render correctly', () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper).toMatchSnapshot();
    });
    describe('submit form', () => {
        const mockSubmit = jest.fn();
        const wrapper = shallow(<LoginForm onSubmit={mockSubmit} />);
        const form = wrapper.find('Form');
        beforeEach(() => form.simulate('submit'));
        it('should invoke onSubmit func', () => {
            expect(mockSubmit).toHaveBeenCalled();
        });
    });
});
