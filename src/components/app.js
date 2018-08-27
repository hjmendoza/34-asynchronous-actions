import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux';

import Dashboard from './dashboard.js';
import createStore from '../lib/store';

const store = createStore();

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={Dashboard} />
      </Fragment>
    </ BrowserRouter>
    </Provider>
    );
  }

}

