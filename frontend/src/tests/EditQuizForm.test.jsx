import React from 'React'
import { shallow } from 'enzyme';
import { Button } from '@material-ui/core';
import EditQuizForm from '../components/EditQuizForm';

describe('editquizform', () => {
  const editquizform = shallow((<EditQuizForm />))
  // Test texts
  it('has New Name title', () => {
    expect(editquizform.find(Button).first().text()).toBe('Edit Name');
  });
});
