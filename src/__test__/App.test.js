import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

it('renderiza o App', () => {
    const tree = renderer
    .create(
      <Router history={history}>
        <App />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});