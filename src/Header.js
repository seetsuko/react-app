import * as React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <a href='/' id='title'><h1>せっちゃんねる＠</h1></a>
      <Link to='newThread' id='nav'><h2>スレッドを立てる</h2></Link>
      <Link to='newSubmit' id='nav'><h2>レス投稿画面</h2></Link>
      <Link to='SubmitList' id='nav'><h2>レス一覧</h2></Link>
    </header>
  )
}
