import React from 'React'
import { shallow } from 'enzyme';
import { Title, InputTitle } from '../style';
import { Button, Paper, Box, Checkbox, Input, MenuItem, Select } from '@material-ui/core';
import EditQuestionForm from '../components/EditQuestionForm'
import QuestionEdit from '../pages/EditQuestion';

describe('editquestionform', () => {
  const editQuestionForm = shallow((<EditQuestionForm />))
  const editQuestion = shallow((<QuestionEdit />))
  // Test Edit Question header
  it('has Edit Question header', () => {
    expect(editQuestion.find(Title).text()).toBe('Edit Question');
    expect(editQuestion.find(Paper).prop('variant')).toBe('outlined');
    expect(editQuestion.find(Box).prop('color')).toBe('primary');
  });
  it('checks snapshot after Edit Question header', () => {
    expect(editQuestion.find(Title).text()).toMatchSnapshot();
    expect(editQuestion.find(Paper).prop('variant')).toMatchSnapshot();
    expect(editQuestion.find(Box).prop('color')).toMatchSnapshot();
  })

  // Test Edit Question content title and button
  it('has Edit Question content', () => {
    expect(editQuestionForm.find(InputTitle).first().text()).toBe('Edit question Content: Edit');
    expect(editQuestionForm.find(Button).first().text()).toBe('Edit');
  });
  it('checks snapshot after edit question content', () => {
    expect(editQuestionForm.find(InputTitle).first().text()).toMatchSnapshot();
    expect(editQuestionForm.find(Button).first().text()).toMatchSnapshot();
  });

  // Test edit question type
  it('has Edit Question type', () => {
    expect(editQuestionForm.find(Select).prop('defaultValue')).toBe('Single');
    expect(editQuestionForm.find(MenuItem).first().text()).toBe(' Single Choice ');
    expect(editQuestionForm.find(MenuItem).at(1).text()).toBe(' Multiple Choice ');
  });
  it('checks snapshot after edit question content', () => {
    expect(editQuestionForm.find(Select).prop('defaultValue')).toMatchSnapshot();
    expect(editQuestionForm.find(MenuItem).first().text()).toMatchSnapshot();
    expect(editQuestionForm.find(MenuItem).at(1).text()).toMatchSnapshot();
  });

  // Test Answer1 checkbox
  it('has Answer1 checkbox', () => {
    expect(editQuestionForm.find(Checkbox).first().prop('id')).toBe('ckb1');
  });
  it('check snapshot after Answer1 checkbox', () => {
    expect(editQuestionForm.find(Checkbox).first().prop('id')).toMatchSnapshot();
  });

  // Test Answer2 Input type
  it('has Answer2 input type', () => {
    expect(editQuestionForm.find(Input).at(5).prop('type')).toBe('text');
  });
  it('check snapshot after Answer2 input type', () => {
    expect(editQuestionForm.find(Input).at(5).prop('type')).toMatchSnapshot();
  });

  // Test Answer3 button
  it('has Answer3 button label', () => {
    expect(editQuestionForm.find(Button).at(6).text()).toBe('Save');
  });
  it('check snapshot after Answer3 button label', () => {
    expect(editQuestionForm.find(Button).at(6).text()).toMatchSnapshot();
  });
});
