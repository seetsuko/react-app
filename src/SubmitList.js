import * as React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export const SubmitList = () => {

  const { state } = useLocation()
  const urlId = state.threadData.id
  const title = state.threadData.title

  // 投稿一覧のstate
  const [resList, setResList] = useState([])
  // 入力内容のstate
  const [text, setText] = useState('')
  // mapエラー回避state
  const [error,setError] = useState()

  const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${urlId}/posts`

  console.log(url)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setError(data.posts)
        setResList(Object(data.posts))  
      })
  }, [])

  // 入力内容をstateに格納
  const handleChange = (e) => {
    setText(e.target.value)
  }

  // ボタン押下でAPIにPOST
  const onClickUpdata = () => {
    axios.post(url, {
      "post": text,
    })
      .then(res => {
        console.log(res.data)
      })
       // トップページに戻る
      return (
      window.location.href = '/submitList'
    )
    }

  // レスが無い時のmapエラーを回避する
  const list = () =>{
    if(error === null){
      return <div className='text'><p>レスがありません</p></div>
    }else{
      return  resList.map((s) => 
        <p key={s.id}>{s.post}</p>
      )
    }}
  console.log(resList)
  console.log(error)

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
