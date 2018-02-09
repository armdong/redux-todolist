import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools())

const App = () =>
  <Provider store={store}>
    <div className="todoapp">
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>

render(
  <App />,
  document.querySelector('#root')
)