import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import DashboardHome from './Pages/Dashboard/Home';
import NotFound from './Pages/404';
import Provider from './store/Provider';
import RoutesPrivate from './Components/Routes/Private'; 

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <RoutesPrivate path="/dashboard/home" component={DashboardHome} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Provider>
  );
}

export default App;
