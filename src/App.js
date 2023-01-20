
import * as React from 'react'
import './App.css';
import { Header } from "./Header";
import { ThreadList } from "./ThreadList";


export function App() {
  return (
    <div>
      <Header/>
      <ThreadList/>
    </div>
  )
}

export default App;
