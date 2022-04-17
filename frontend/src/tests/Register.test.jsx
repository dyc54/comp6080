import React from 'React'
import Register from '../pages/Register';
import { shallow } from 'enzyme';
import { Button } from '@material-ui/core';
import { Title } from '../style';
// import RegisterForm from './components/Registerform';

describe('Register', () => {
  const register = shallow((<Register />))
  // const registerForm = shallow(<RegisterForm />)

  // Test texts
  it('has BigBrain header', () => {
    expect(register.find('h2').text()).toBe('BigBrain');
  });
  it('checks Snapshot after header', () => {
    expect(register.find('h2').text()).toMatchSnapshot();
  })

  // Test Register button
  it('has Register button', () => {
    expect(register.find(Button).first().text()).toBe('Register');
    expect(register.find(Button).first().prop('color')).toBe('primary');
  });
  it('checks snapshot after Register button', () => {
    expect(register.find(Button).first().text()).toMatchSnapshot();
    expect(register.find(Button).first().prop('color')).toMatchSnapshot();
  })

  // Test login button
  it('has Login button', () => {
    expect(register.find(Button).at(1).text()).toBe('Login');
    expect(register.find(Button).at(1).prop('color')).toBe('default');
  });
  it('checks snapshot after login button', () => {
    expect(register.find(Button).at(1).text()).toMatchSnapshot();
    expect(register.find(Button).at(1).prop('color')).toMatchSnapshot();
  })

  // Test register
  it('has Register title', () => {
    expect(register.find(Title).text()).toBe('Register');
  });
  it('checks snapshot after Register title', () => {
    expect(register.find(Title).text()).toMatchSnapshot();
  });
/*
  it('has email input textfield', () => {
    expect(registerForm.find(InputTitle).text()).toBe('Email:');
    expect(registerForm.find(Input).first().prop('type')).toBe('email');
  });
*/
});
