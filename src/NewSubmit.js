import * as React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NewSubmit = () => {
    const { state } = useLocation()
    const resUrlId = state.id
    const [text, setText] = useState('')
  
    console.log(resUrlId)
    // setInputTextを使って入力した値を
    // event.target.valueから取り出しinputTextを更新。
    const handleChange = (e) => {
      setText(e.target.value)
    }
  
    // 作成ボタン押下
    const onClickUpdata = () => {
      axios.post(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${resUrlId}/posts`, {
        post: text,
      })
        .then(res => {
          console.log(res.data)
        })
  
      // トップページに戻る
      return (
        window.location.href = '/'
      )
    }
  
    return (
      <div className='newThread'>
        <label>レスを投稿</label>
        <textarea value={text} onChange={handleChange}></textarea>
        <div className='submenu'>
          <a href='/'>Topに戻る</a>
          <button onClick={onClickUpdata}>作成</button>
        </div>
      </div>
    )
  }
