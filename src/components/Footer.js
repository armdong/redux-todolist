import React from 'react'
import TodoCount from '../containers/TodoCount'
import Filters from './Filters'
import ClearCompleted from '../containers/ClearCompleted'

const Footer = () =>
  <footer className="footer">
    <TodoCount />
    <Filters />
    <ClearCompleted />
  </footer>

export default Footer