import React, { Component } from 'react';
import Header from './Components/Header/'
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter
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

class App extends Component{
  render(){
    console.log('this.props:', this.props)
    return (
       <div className="App">
       <Header 
         lang={this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]}
       />
         <Switch >
           <Route exact path='/' component={Home}/>
           <Route path='/about' component={About}/>
           <Route path='/blog' component={Blog}/>
           <Route path='/contact' component={Contact}/>
           <Route path='/join-us' component={Join_Us}/>
           <Route path='/plans' component={Plans}/>
         </Switch>
       </div>
   )
  }
 ;
}

export default withRouter(App);
