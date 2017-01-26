import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Home from './Home'

render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Home }/>
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
