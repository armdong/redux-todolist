import React from 'react'

const Link = ({
  active,
  children,
  onFilterClick
}) =>
  <li>
    <a
      href="javacript:;" // eslint-disable-line jsx-a11y/href-no-hash
      className={active ? 'selected' : ''}
      onClick={(e) => {
        e.preventDefault()
        active || onFilterClick()
      }}
    >
      {children}
    </a>
  </li>

export default Link