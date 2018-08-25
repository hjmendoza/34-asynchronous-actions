import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Thunker from 'thunker';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav>
            <NavLink to="/">Landing</NavLink>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </nav>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Fragment>
      </ BrowserRouter>
    );
  }

}

