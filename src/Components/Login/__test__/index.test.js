import React from 'react';
import Login from '../';
import renderer from 'react-test-renderer';

it('renderiza login', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});