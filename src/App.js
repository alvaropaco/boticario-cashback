import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './Pages/Home';
import DashboardHome from './Pages/Dashboard/Home';
import DashboardResellerForm from './Pages/Dashboard/Reseller/ResellerForm';
import Orders from './Pages/Dashboard/Orders';
import OrdersForm from './Pages/Dashboard/Orders/OrdersForm';
import NotFound from './Pages/404';
import Provider from './store/Provider';
import RoutesPrivate from './Components/Routes/Private'; 

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" exact={true} component={withRouter(Home)} />
        <RoutesPrivate path="/dashboard/home" component={withRouter(DashboardHome)} />
        <RoutesPrivate path="/dashboard/reseller/new" component={withRouter(DashboardResellerForm)} />
        <RoutesPrivate path="/dashboard/orders" exact={true} component={withRouter(Orders)} />
        <RoutesPrivate path="/dashboard/orders/new" component={withRouter(OrdersForm)} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Provider>
  );
}

export default App;
