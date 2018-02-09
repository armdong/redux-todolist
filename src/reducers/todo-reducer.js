import {
  NEW_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from '../constants'

const todo = (state, action) => {
  switch (action.type) {
    case NEW_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: action.completed
      }

    case EDIT_TODO:
      return (state.id === action.id)
        ? {...state, text: action.text}
        : state

    case DELETE_TODO:
      return state.id !== action.id

    case TOGGLE_TODO:
      return (state.id === action.id)
        ? {...state, completed: !state.completed}
        : state

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case NEW_TODO:
      return [...state, todo(undefined, action)]

    case DELETE_TODO:
      return state.filter(t => todo(t, action))

    case EDIT_TODO:
    case TOGGLE_TODO:
      return state.map(t => todo(t, action))

    default:
      return state
  }
}

export default todos