import React from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants'
import FilterLink from '../containers/FilterLink'

const Filters = () =>
  <ul className="filters">
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </ul>

export default Filters