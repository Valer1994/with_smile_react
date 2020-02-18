import React, { useState, useEffect } from 'react';
import Header from './Components/Header/'
import {
  Switch,
  Route,
  withRouter,
  useLocation,
  useHistory
} from 'react-router-dom'

import { languages } from './config/config'

import {
  Blog,
  Home,
  Tours,
  About,
  Contact,
  SecondBlog,
} from './Components/Main'

import './App.scss';

// import { createStore, combineReducers } from 'redux'

// const routesList = [
//   {
//     isExact: true,
//     path: '/:lang',
//     Comp: Home
//   }
// ]

const App = () => {
  const location = useLocation()

  const history = useHistory()

  const pathname = location.pathname

  const langPathName = pathname.slice(1, 3)

  const [lang, setLang] = useState('en')
  console.log(pathname)

  useEffect(() => {
    if(languages[langPathName]) {
      history.push(pathname)
      setLang(langPathName)
    } else {
      history.push('/en');
      setLang('en')
    }
  }, [history, lang, langPathName, location.pathname, pathname, setLang])

  // const list = routesList.map(({ path, isExact, Comp }) => {
  //   return (<Route exact={isExact} path={path}>
  //   <Comp lang={lang}/>
  // </Route>)
  // })
  console.log(lang)
  const routers = <Switch >
      <Route exact path='/:lang'>
        <Home lang={lang}/>
      </Route>
      <Route path='/:lang/about'>
        <About lang={lang}/>
      </Route>
      <Route path='/:lang/tours'>
        <Tours lang={lang}/>
      </Route>
      <Route path='/:lang/blog'>
        <Blog lang={lang}/>
      </Route>
      <Route path='/:lang/contact'>
        <Contact lang={lang}/>
      </Route>
      <Route path='/:lang/join-us'>
        <SecondBlog lang={lang}/>
      </Route>
    </Switch>

  return (
      <div className="App">
        <Header lang={lang} />
        {routers}
      </div>
)};

// const initialState = {
//   name: 'Mika',
//   surname: 'Gevorgyan',
//   age: 13,
//   salary: 13000
// }

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case 'NAME':
//       return { ...state, name: action.payload}
//     case 'SURNAME':
//       return { ...state, surname: action.payload}
//     default:
//       return state
//   }
// }

// const counterBlog = (state = initialState, action) => {
//   switch (action.type) {
//     case 'AGE':
//       return { ...state, age: action.payload + state.age}
//     case 'SALARY':
//       return { ...state, salary: action.payload * state.salary}
//     default:
//       return state
//   }
// }

export default withRouter(App);
