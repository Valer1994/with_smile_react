import { combineReducers } from 'redux'

const initialStateCount = {
    name: 'Mika',
    surname: 'Gevorgyan'
}
const counter = (state = initialStateCount, action) => {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload}
    case 'SURNAME':
      return { ...state, surname: action.payload}
    default:
      return state
  }
}

const initialStateCountBlog = {
    name: 13,
    surname: 13000
}

const counterBlog = (state = initialStateCountBlog, action) => {
  switch (action.type) {
    case 'AGE':
      return { ...state, age: action.payload + state.age}
    case 'SALARY':
      return { ...state, salary: action.payload * state.salary}
    default:
      return state
  }
}

export default combineReducers({ counter, counterBlog })