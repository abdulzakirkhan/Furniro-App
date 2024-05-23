import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'
import rootReducers from './components/Services/reducers/rootReducers.js'
import { Provider } from 'react-redux'
const store=createStore(rootReducers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
