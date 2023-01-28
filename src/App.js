import * as React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Header } from './Header'
import { ThreadList } from './ThreadList'
import { NewThread } from './NewThread'
import { SubmitList } from './SubmitList'


export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<ThreadList />} /> 
          <Route path='/newThread' element={<NewThread />} />
          <Route exact path='/thread/:id' element={<SubmitList />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
