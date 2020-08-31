import React from 'react';
import RoutesPrivate from '../';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Test = () => {
    return (<>Test</>)
}

it('renderiza component RoutesPrivate', () => {
  const tree = renderer
    .create(
        <Router history={history}>
            <RoutesPrivate path="/test" component={Test} />
        </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});