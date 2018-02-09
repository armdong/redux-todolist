import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  count: state.todos.filter(t => !t.completed).length
})

let TodoCount = ({ count }) =>
  <span className="todo-count">
    <strong>{count}</strong>
    {' '}
    <span>imtes</span>
    {' '}
    <span>left</span>
  </span>

TodoCount = connect(
  mapStateToProps
)(TodoCount)

export default TodoCount