import React, { Component } from 'react';
import Header from './Components/Header/'
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom'

import { languages } from './config/config'

import {
  About,
  Blog,
  Contact,
  Home,
  Join_Us,
  Plans
} from './Components/Main'

import './App.scss';

class App extends Component{

  componentWillMount() {
    const pathname = this.props.history.location.pathname
    if(Object.keys(languages).includes(pathname.slice(1, 3))) {
      this.props.history.push(pathname)
    } else {
      this.props.history.push('/en');
    }
  }

  render(){
    return (
      <div className="App">
        <Header 
          lang={this.props.history.location.pathname.slice(1, 3)}
        />
        <Switch >
          <Route exact path='/:lang' component={Home}/>
          <Route path='/:lang/about' component={About}/>
          <Route path='/:lang/blog' component={Blog}/>
          <Route path='/:lang/contact' component={Contact}/>
          <Route path='/:lang/join-us' component={Join_Us}/>
          <Route path='/:lang/plans' component={Plans}/>
        </Switch>
      </div>
   )};
}

export default withRouter(App);
