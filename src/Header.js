import * as React from 'react'
import { Link } from 'react-router-dom'

// ヘッダーコンポーネント
export const Header = () => {
  return (
    <header>
      <a href='/' id='title'><h1>掲示板</h1></a>
      <Link to='newThread' id='nav'><h2>スレッドを立てる</h2></Link>
      
    </header>
  )
}
