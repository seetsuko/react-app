import * as React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './Header'
import { ThreadList } from './ThreadList'
import { NewThread } from './NewThread'

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <ThreadList />
          </Route>
          <Route path='/newThread'>
            <NewThread />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
