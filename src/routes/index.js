import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Destinatarios from '../pages/Destinatarios';
import Entregadores from '../pages/Entregadores';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/entregadores" component={Entregadores} isPrivate />
      <Route path="/destinatarios" component={Destinatarios} isPrivate />
    </Switch>
  );
}
