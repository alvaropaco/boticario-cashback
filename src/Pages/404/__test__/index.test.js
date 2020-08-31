import React from 'react';
import NotFound from '../';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

it('renderiza a página de Not Found', () => {
    const tree = renderer
    .create(
        <Router history={history}>
            <NotFound />
        </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});