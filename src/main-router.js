import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './about';
import Contributors from './contributors';
import Home from './home';

const MainRouter = () => (
  <div className="main">
    <div className="container">
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contributors" component={Contributors} />
        </Switch>
      </div>
    </div>
  </div>
);

export default MainRouter;
