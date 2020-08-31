import React from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Home from './Pages/Home';
import DashboardHome from './Pages/Dashboard/Home';
import DashboardResellerForm from './Pages/Dashboard/Reseller/ResellerForm';
import Orders from './Pages/Dashboard/Orders';
import OrdersForm from './Pages/Dashboard/Orders/OrdersForm';
import NotFound from './Pages/404';
import Provider from './store/Provider';
import RoutesPrivate from './Components/Routes/Private'; 

const history = createBrowserHistory();

function App() {
  return (
    <Provider>
      <Router history={history}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <RoutesPrivate path="/dashboard/home" component={DashboardHome} />
          <RoutesPrivate path="/dashboard/reseller/new" component={DashboardResellerForm} />
          <RoutesPrivate path="/dashboard/orders" exact={true} component={Orders} />
          <RoutesPrivate path="/dashboard/orders/new" component={OrdersForm} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
