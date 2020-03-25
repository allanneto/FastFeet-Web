import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Login from '../pages/Login';
import Couriers from '../pages/Couriers';
import Deliveries from '../pages/Deliveries';
import CreateDelivery from '../pages/Deliveries/CreateDelivery';

import Problems from '../pages/Problems';
import Recipients from '../pages/Recipients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/deliveries" component={Deliveries} isPrivate />
      <Route path="/create/delivery" component={CreateDelivery} isPrivate />

      <Route path="/couriers" component={Couriers} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
    </Switch>
  );
}
