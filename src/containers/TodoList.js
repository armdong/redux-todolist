import { connect } from 'react-redux'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constants'
import { toggleTodo, editTodo, deleteTodo } from '../actions/todo-action'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(
    state.todos,
    state.filter
  )
})

const mapDispatchToProps = (dispatch) => ({
  onToggleTodo: (id) => {
    dispatch(toggleTodo(id))
  },
  onEditTodo: (id, text) => {
    dispatch(editTodo(id, text))
  },
  onDeleteTodo: (id) => {
    dispatch(deleteTodo(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList