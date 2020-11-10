import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine.js'
import Soda from './Soda.js'
import Cookies from './Cookies.js'
import Snickers from './Snickers.js'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
        <Route exact path='/' render={ () => <VendingMachine /> }/>
        <Route exact path='/soda' render={ () => <Soda /> }/>
        <Route exact path='/cookies' render={ () => <Cookies /> }/>
        <Route exact path='/snickers' render={ () => <Snickers /> }/>
        </Switch>
      </div>
    )
  }
}

export default App
