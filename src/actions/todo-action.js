import {
  NEW_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from '../constants'
import uuidv4 from 'uuid/v4'

export const newTodo = (text) => ({
  type: NEW_TODO,
  id: uuidv4(),
  text,
  completed: false
})

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})