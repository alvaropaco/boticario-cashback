import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import NotFound from './Pages/404';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/*" component={NotFound} />
    </Switch>
  );
}

export default App;
