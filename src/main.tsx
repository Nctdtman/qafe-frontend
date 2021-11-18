import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import 'antd/dist/antd.css'

import RouterMananger from './RouterMananger'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterMananger />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
)
