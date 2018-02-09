import React from 'react'
import { connect } from 'react-redux'
import { newTodo } from '../actions/todo-action'

const ENTER_KEY = 13

let NewTodo = ({ dispatch }) => {
  let input;

  return (
    <input
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
      ref={(node) => input = node}
      onKeyDown={(e) => {
        if (e.keyCode !== ENTER_KEY) {
          return false
        }

        if (input.value.trim() === '') {
          return false
        }

        e.preventDefault()
        dispatch(newTodo(input.value.trim()))
        input.value = ''
      }}
    />
  )
}
NewTodo = connect()(NewTodo)

export default NewTodo