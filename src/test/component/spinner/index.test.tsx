import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from '../../../app/view/component/spinner';

describe('Spinner component', () => {
    it('render correctly', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    });
});
