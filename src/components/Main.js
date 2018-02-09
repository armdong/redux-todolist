import React from 'react'
import ToggleAll from '../containers/ToggleAll'
import VisibleTodoList from '../containers/TodoList'

const Main = () =>
  <section className="main">
    {/* <ToggleAll /> */}
    <VisibleTodoList />
  </section>

export default Main