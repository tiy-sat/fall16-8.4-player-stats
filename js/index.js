import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Blog from './Blog'

render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Blog } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
