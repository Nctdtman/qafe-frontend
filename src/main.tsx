import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './pages/App/App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/:id">
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
)
