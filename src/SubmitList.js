import * as React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

// 投稿リストコンポーネント
export const SubmitList = () => {
  const { state } = useLocation()
  const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${state.threadData.id}/posts`
  // 投稿一覧のstate
  const [resList, setResList] = useState([])
  // mapエラー回避のstate
  const [error,setError] = useState()
  
  // API取得
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setError(data.posts)
        setResList(Object(data.posts))  
      })
  }, [])

  // 投稿ボタンでtext内容をAPIに送る
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const onClickUpdata = () => {
    axios.post(url, {
      "post": text,
      })
      .then(res => {
        console.log(res.data)
      })
       // 投稿一覧ページ更新
      return (
      window.location.href = '/submitList'
    )
    }

  // 投稿が無い時のmapエラー回避
  const list = () =>{
    if(error === null){
      return (
        <div className='text'>
          <p>レスはありません</p>
        </div>)
      }else{
        return resList.map((s) => 
          <p key={s.id}>{s.post}</p>)
      }
    }
  console.log(resList)
  console.log(error)
  const title = state.threadData.title

  return (
    <div className='thread'>
      <h3>{title}</h3>
      <div className='res'>
        {list()}
      </div>
      <div className='submit'>
        <textarea value={text} onChange={handleChange}></textarea><br/>
        <button onClick={onClickUpdata}>投稿する</button>
      </div>
    </div>
  )
}
