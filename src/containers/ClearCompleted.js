import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/todo-action'

const mapStateToProps = (state) => ({
  todos: state.todos.filter(t => t.completed)
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: ({ id }) => {
    dispatch(deleteTodo(id))
  }
})

let ClearCompleted = ({ todos, onDeleteTodo }) =>
  <button
    className="clear-completed"
    onClick={() => todos.forEach(onDeleteTodo)}
  >
    Clear completed
  </button>

ClearCompleted = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearCompleted)

export default ClearCompleted