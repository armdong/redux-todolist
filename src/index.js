import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="todoapp">
          <Header />
          <Main />
        </div>
      </Provider>
    )
  }
}

render(
  <App />,
  document.querySelector('#root')
)