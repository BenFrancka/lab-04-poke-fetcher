import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import PokeIndex from './PokeIndex';
import PokeDetail from './PokeDetail';

export default class App extends Component {

//renders the HTML on the page with Components and events
  render() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <Switch>
          <Route path="/pokemon/:id" component={PokeDetail} />
          <Route path="/pokemon" component={PokeIndex} />
          <Route path="/" component={Home} />
        </Switch>

      </main>
    </BrowserRouter>
  );
}
}


