import React from 'React'
import { shallow } from 'enzyme';
import { Title, InputTitle } from '../style';
import { Button, Paper, Box, Input } from '@material-ui/core';
import EditQuizForm from '../components/EditQuizForm';
import QuizEdit from '../pages/EditQuiz';

describe('editquizform', () => {
  const editquizform = shallow((<EditQuizForm />))
  const editquiz = shallow((<QuizEdit />))
  // Test Edit Game header
  it('has Edit Game header', () => {
    expect(editquiz.find(Title).text()).toBe('Edit Game');
    expect(editquiz.find(Paper).prop('variant')).toBe('outlined');
    expect(editquiz.find(Box).prop('color')).toBe('primary');
  });
  it('checks snapshot after Edit Game header', () => {
    expect(editquiz.find(Title).text()).toMatchSnapshot();
    expect(editquiz.find(Paper).prop('variant')).toMatchSnapshot();
    expect(editquiz.find(Box).prop('color')).toMatchSnapshot();
  })

  // Test Edit Name Title
  it('has New Name title', () => {
    expect(editquizform.find(InputTitle).first().text()).toBe('Edit Name: Edit');
    expect(editquizform.find(Input).first().prop('type')).toBe('text');
  });
  it('checks snapshot after New Name title', () => {
    expect(editquizform.find(InputTitle).first().text()).toMatchSnapshot();
    expect(editquizform.find(Input).first().prop('type')).toMatchSnapshot();
  });

  // Test Edit name Button
  it('has New Name button', () => {
    editquizform.find(Button).first().simulate('click');
    expect(editquizform.find(Button).first().prop('variant')).toBe('contained');
    expect(editquizform.find(Button).first().text()).toBe('Edit');
  });
  it('checks snapshot after New Name button', () => {
    editquizform.find(Button).first().simulate('click');
    expect(editquizform.find(Button).first().prop('variant')).toMatchSnapshot();
    expect(editquizform.find(Button).first().text()).toMatchSnapshot();
  });

  // Test Edit Thumbnail Title
  it('has New thumbnail title', () => {
    expect(editquizform.find(InputTitle).at(1).text()).toBe('Edit Thumbnail: Edit');
    expect(editquizform.find(Input).at(1).prop('type')).toBe('text');
  });
  it('checks snapshot after New thumbnail title', () => {
    expect(editquizform.find(InputTitle).at(1).text()).toMatchSnapshot();
    expect(editquizform.find(Input).at(1).prop('type')).toMatchSnapshot();
  });

  // Test Edit Thumbnail Button
  it('has New thumbnail button', () => {
    editquizform.find(Button).first().simulate('click');
    expect(editquizform.find(Button).at(1).prop('variant')).toBe('contained');
    expect(editquizform.find(Button).at(1).text()).toBe('Edit');
  });
  it('checks snapshot after New thumbnail button', () => {
    editquizform.find(Button).first().simulate('click');
    expect(editquizform.find(Button).at(1).prop('variant')).toMatchSnapshot();
    expect(editquizform.find(Button).at(1).text()).toMatchSnapshot();
  });

  // Test New Question Title
  it('has New question title', () => {
    expect(editquizform.find(InputTitle).at(2).text()).toBe('New Question:Add');
    expect(editquizform.find(Input).at(2).prop('type')).toBe('text');
  });
  it('checks snapshot after New question title', () => {
    expect(editquizform.find(InputTitle).at(2).text()).toMatchSnapshot();
    expect(editquizform.find(Input).at(2).prop('type')).toMatchSnapshot();
  });

  // Test New Question Button
  it('has New question button', () => {
    editquizform.find(Button).first().simulate('click');
    expect(editquizform.find(Button).at(2).prop('variant')).toBe('contained');
    expect(editquizform.find(Button).at(2).text()).toBe('Add');
  });
  it('checks snapshot after New question button', () => {
    editquizform.find(Button).first().simulate('click');
    expect(editquizform.find(Button).at(2).prop('variant')).toMatchSnapshot();
    expect(editquizform.find(Button).at(2).text()).toMatchSnapshot();
  });

  // Test back button
  it('has back button', () => {
    editquizform.find(Button).at(3).simulate('click');
    expect(editquizform.find(Button).at(3).prop('variant')).toBe('contained');
    expect(editquizform.find(Button).at(3).text()).toBe('Back to Dashboard');
  });
  it('checks snapshot after back button', () => {
    editquizform.find(Button).at(3).simulate('click');
    expect(editquizform.find(Button).at(3).prop('variant')).toMatchSnapshot();
    expect(editquizform.find(Button).at(3).text()).toMatchSnapshot();
  });
});
