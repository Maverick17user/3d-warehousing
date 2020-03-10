import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Warehouse from '../view1/Warehouse';
import Area from '../view-2/Area';
import Section from '../view3/Section';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Warehouse} />
        <Route path="/area" component={Area} />
        <Route path="/section" component={Section} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
