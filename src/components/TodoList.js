import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({
  todos,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo
}) =>
  <ul className="todo-list">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        {...todo}
        onToggleTodo={() => onToggleTodo(todo.id)}
        onEditTodo={onEditTodo}
        onDeleteTodo={() => onDeleteTodo(todo.id)}
      />
    ))}
  </ul>

export default TodoList