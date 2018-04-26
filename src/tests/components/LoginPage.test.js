import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render loginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const spy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={spy} />);
  wrapper.find('button').simulate('click');
  expect(spy).toHaveBeenCalled();
});
