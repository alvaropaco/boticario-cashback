import React from 'react';
import OrdersForm from '../OrdersForm';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

it('renderiza a página de Compras', () => {
    const tree = renderer
    .create(
        <Router history={history}>
            <OrdersForm />
        </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});