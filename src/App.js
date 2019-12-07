import React from 'react';
import Header from './Components/Header/'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import {
  About,
  Blog,
  Contact,
  Home,
  Join_Us,
  Plans
} from './Components/Main'

import './App.scss';

const App = () => {
  return (
     <BrowserRouter >
      <div className="App">
      <Header />
        <Switch >
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/join-us' component={Join_Us}/>
          <Route exact path='/plans' component={Plans}/>
        </Switch>
      </div>
     </BrowserRouter>
  );
}

export default App;
