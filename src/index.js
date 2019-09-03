import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import HiltonTask from './HiltonTask';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/HiltonTask2" component={HiltonTask} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))