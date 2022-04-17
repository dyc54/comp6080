import React from 'React'
import Register from './pages/Register';
import { shallow } from 'enzyme';
import { Button, Input } from '@material-ui/core';
import { Title, InputTitle } from '../src/style';
import RegisterForm from './components/Registerform';
import { BrowserRouter } from 'react-router-dom';

describe('Register', () => {
  const register = shallow((<Register />))
  const registerForm = shallow(<BrowserRouter><RegisterForm /></BrowserRouter>)

  // Test texts
  it('has BigBrain header', () => {
    expect(register.find('h2').text()).toBe('BigBrain');
  });

  it('has Register button', () => {
    expect(register.find(Button).first().text()).toBe('Register');
    expect(register.find(Button).first().prop('color')).toBe('primary');
  });

  it('has Login button', () => {
    expect(register.find(Button).at(1).text()).toBe('Login');
    expect(register.find(Button).at(1).prop('color')).toBe('default');
  });

  it('has Register title', () => {
    expect(register.find(Title).text()).toBe('Register');
  });

  it('has email input textfield', () => {
    expect(registerForm.find(InputTitle).first().text()).toBe('Email:');
    expect(registerForm.find(Input).first().prop('type')).toBe('email');
  });
});
