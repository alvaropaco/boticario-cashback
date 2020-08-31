import React from 'react';
import Orders from '../';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

it('renderiza a página de Compras', () => {
    const tree = renderer
    .create(
        <Router history={history}>
            <Orders />
        </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});