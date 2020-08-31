import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('renderiza a página de Compras', () => {
    const tree = renderer
    .create(
      <App />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});