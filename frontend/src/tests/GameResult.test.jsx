import React from 'React';
import GameResultForm from '../components/GameResultForm';
import { shallow } from 'enzyme';
import { Button, Box, Paper } from '@material-ui/core';
import { Title, InputTitle } from '../style';
import GameResult from '../pages/GameResult';

describe('GameResult', () => {
  const gameResultForm = shallow((<GameResultForm />))
  const gameResult = shallow((<GameResult />))

  // Test texts
  it('has GameResult header', () => {
    expect(gameResult.find(Title).text()).toBe('Game Result');
    expect(gameResult.find(Box).prop('color')).toBe('primary');
    expect(gameResult.find(Paper).prop('variant')).toBe('outlined');
  });
  it('checks snapshot after header', () => {
    expect(gameResult.find(Title).text()).toMatchSnapshot();
    expect(gameResult.find(Box).prop('color')).toMatchSnapshot();
    expect(gameResult.find(Paper).prop('variant')).toMatchSnapshot();
  });

  // Test input title
  it('has Input Title', () => {
    expect(gameResultForm.find(InputTitle).text()).toBe('Top 5 users:');
    expect(gameResultForm.find(Box).prop('textAlign')).toBe('right');
  });
  it('checks snapshot after Title', () => {
    expect(gameResultForm.find(InputTitle).text()).toMatchSnapshot();
    expect(gameResultForm.find(Box).prop('textAlign')).toMatchSnapshot();
  });

  // Test back button
  it('has back button', () => {
    expect(gameResultForm.find(Button).text()).toBe('Back to Dashboard');
    expect(gameResultForm.find(Button).prop('variant')).toBe('contained');
    expect(gameResultForm.find(Button).prop('color')).toBe('primary');
  });
  it('checks snapshot after back button', () => {
    expect(gameResultForm.find(Button).text()).toMatchSnapshot();
    expect(gameResultForm.find(Button).prop('variant')).toMatchSnapshot();
    expect(gameResultForm.find(Button).prop('color')).toMatchSnapshot();
  });
});
