import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Destinatarios from '../pages/Destinatarios';
import Entregadores from '../pages/Entregadores/List';
import EntregadoresEdit from '../pages/Entregadores/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/deliveryman" exact component={Entregadores} isPrivate />
      <Route path="/deliveryman/:id" component={EntregadoresEdit} isPrivate />
      <Route path="/destinatarios" component={Destinatarios} isPrivate />
    </Switch>
  );
}
