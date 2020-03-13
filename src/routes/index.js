import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Destinatarios from '../pages/Destinatarios/List';
import DestinatariosForm from '../pages/Destinatarios/Form';
import Entregadores from '../pages/Entregadores/List';
import EntregadoresForm from '../pages/Entregadores/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/deliveryman" exact component={Entregadores} isPrivate />
      <Route path="/deliveryman/new" component={EntregadoresForm} isPrivate />
      <Route path="/deliveryman/:id" component={EntregadoresForm} isPrivate />

      <Route path="/recipients" exact component={Destinatarios} isPrivate />
      <Route path="/recipients/new" component={DestinatariosForm} isPrivate />
      <Route path="/recipients/:id" component={DestinatariosForm} isPrivate />
    </Switch>
  );
}
