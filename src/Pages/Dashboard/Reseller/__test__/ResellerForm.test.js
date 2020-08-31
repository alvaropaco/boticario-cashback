import React from 'react';
import ResellerForm from '../ResellerForm';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

it('renderiza a página de Reseller', () => {
    const tree = renderer
    .create(
        <Router history={history}>
            <ResellerForm />
        </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});