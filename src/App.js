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
  SecureRelax,
  ReliableStaff,
  AvailablePrices,
  TastyNationalFood,
  PicturesquePalces,
  ProfessionalService,
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
      <Route path='/:lang/about1/available_prices'>
        <AvailablePrices lang={lang}/>
      </Route>
      <Route path='/:lang/about2/proffesional_service'>
        <ProfessionalService lang={lang}/>
      </Route>
      <Route path='/:lang/about3/secure_relax'>
        <SecureRelax lang={lang}/>
      </Route>
      <Route path='/:lang/about4/reliable_staff'>
        <ReliableStaff lang={lang}/>
      </Route>
      <Route path='/:lang/about5/picturesque_places'>
        <PicturesquePalces lang={lang}/>
      </Route>
      <Route path='/:lang/about6/tasty_national_food'>
        <TastyNationalFood lang={lang}/>
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
