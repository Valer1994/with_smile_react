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
  About,
  Blog,
  Contact,
  Home,
  JoinUs,
  Plans
} from './Components/Main'

import './App.scss';




import { createStore } from 'redux'

const App = () => {
  const [lang, setLang] = useState('en')
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const pathname = location.pathname
    if(Object.keys(languages).includes(pathname.slice(1, 3))) {
      history.push(pathname)
      setLang(pathname.slice(1, 3))
    } else {
      history.push('/en');
      setLang('en')
    }
  }, [history, lang, location.pathname, setLang])

  const routers = <Switch >
      <Route exact path='/:lang'>
        <Home lang={lang}/>
      </Route>
      <Route path='/:lang/about'>
        <About lang={lang}/>
      </Route>
      <Route path='/:lang/about'>
        <About lang={lang}/>
      </Route>
      <Route path='/:lang/blog'>
        <Blog lang={lang}/>
      </Route>
      <Route path='/:lang/contact'>
        <Contact lang={lang}/>
      </Route>
      <Route path='/:lang/join-us'>
        <JoinUs lang={lang}/>
      </Route>
      <Route path='/:lang/plans'>
        <Plans lang={lang}/>
      </Route>
    </Switch>

  return (
      <div className="App">
        <Header lang={lang} />
        {routers}
      </div>
)};

const initialState = {
  name: 'Mika',
  surname: 'Gevorgyan'
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload}
    case 'SURNAME':
      return { ...state, surname: action.payload}
    default:
      return state
  }
}

const name = {
  type: 'NAME',
  payload: 'Valod'
}

const surname = {
  type: 'SURNAME',
  payload: 'Vaxarshyan'
}

const store = createStore(counter)

store.dispatch( { type: 'NAME', payload: 'Vaxarshik' } )
store.dispatch(surname)


export default withRouter(App);
