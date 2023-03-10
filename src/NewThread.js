import * as React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// スレッド作成コンポーネント
export const NewThread = () => {
  const [threadText, setThreadText] = useState('')

  // setInputTextを使って入力した値を、event.target.valueから取り出しinputTextを更新。
  const handleChange = (e) => {
    setThreadText(e.target.value)
  }

  // 作成ボタン押下
  const onClickUpdata = () => {
    axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {
      title: threadText,
    })
      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <div className='newThread'>
      <label>スレッドタイトル</label>
      <input value={threadText} onChange={handleChange}></input>
      <div className='submenu'>
        <a href='/'>Topに戻る</a>
        <Link to='/'><button onClick={onClickUpdata}>作成</button></Link>
      </div>
    </div>
  )
}
