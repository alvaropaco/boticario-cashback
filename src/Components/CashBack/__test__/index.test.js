import React from 'react';
import CashBack from '../';
import renderer from 'react-test-renderer';

it('renderiza component de CashBack', () => {
  const tree = renderer
    .create(<CashBack />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});