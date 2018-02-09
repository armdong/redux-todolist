import React from 'react'
import NewTodo from '../containers/NewTodo'

const Header = () =>
  <header className="header">
    <h1>todos</h1>
    <NewTodo />
  </header>

export default Header