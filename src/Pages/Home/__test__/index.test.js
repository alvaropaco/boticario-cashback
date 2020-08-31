import React from 'react';
import Home from '../';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

it('renderiza a página de Home', () => {
    const tree = renderer
    .create(
        <Router history={history}>
            <Home />
        </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});