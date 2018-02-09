import React, { Component } from 'react'
import classNames from 'classnames'

const ENTER_KEY = 13
const ESCAPE_KEY = 27

class TodoItem extends Component {
  state = {
    editing: false,
    editText: this.props.text
  }

  handleLabelClick = (e) => {
    this.setState({ editing: true }, () => {
      this.editInput.value = this.state.editText
      this.editInput.focus()
      this.editInput.setSelectionRange(0, this.editInput.value.length)
    })
  }

  handleInputChange = (e) => {
    this.setState({
      editText: this.editInput.value
    })
  }

  handleSubmit = (e) => {
    const { editText } = this.state
    const { id, onEditTodo } = this.props

    if (editText === '') {
      return false
    }

    onEditTodo(id, editText.trim())
    this.setState({ editing: false })
  }

  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      this.handleSubmit(e)
    } else if (e.keyCode === ESCAPE_KEY) {
      this.setState({
        editText: this.props.text,
        editing: false
      })
    }
  }

  render() {
    const { completed, onToggleTodo, onDeleteTodo } = this.props

    const cls = classNames({
      'completed': completed,
      'editing': this.state.editing
    })

    return (
      <li className={cls} >
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            onChange={onToggleTodo}
            checked={completed}
          />
          <label
            onDoubleClick={this.handleLabelClick}
          >
            {this.state.editText}
          </label>
          <button className="destroy" onClick={onDeleteTodo}></button>
        </div>
        <input
          className="edit"
          value={this.state.editText}
          ref={(input) => { this.editInput = input }}
          onChange={this.handleInputChange}
          onBlur={this.handleSubmit}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    )
  }
}


export default TodoItem