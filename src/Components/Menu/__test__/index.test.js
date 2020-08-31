import React from 'react';
import { Router } from 'react-router-dom'
import Menu from '../';
import renderer from 'react-test-renderer';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

it('renderiza component de Menu', () => {
  const tree = renderer
    .create(
    <Router history={history}>
      <Menu><p>Test</p></Menu>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});