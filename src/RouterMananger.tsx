import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './pages/App/App'
import Question from './pages/Question'

interface RouterManangerProps {}

const RouterMananger: FC<RouterManangerProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/question/:questionId">
          <Question />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default RouterMananger
