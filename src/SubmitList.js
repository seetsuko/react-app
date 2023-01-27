import * as React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export const SubmitList = () => {

  const { state } = useLocation()
  const urlId = state.threadData.id
  const title = state.threadData.title

  // 投稿一覧のstate
  const [postList, setPostList] = useState([])
  // 入力内容のstate
  const [text, setText] = useState('')

  const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${urlId}/posts`

  console.log(url)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => 
        setPostList(Object(data.posts))
      )
  }, [])

  // 入力内容をstateに格納
  const handleChange = (e) => {
    setText(e.target.value)
  }

  // ボタン押下でAPIにPOST
  const onClickUpdate = () => {
    if(text.length>=1){    
    axios.post(url, {
      "post": text,
    })
      .then(res => {
        console.log(res.data)
      })
      return  window.location.href = `/submitList/${urlId}`
    }else{
      alert('投稿内容が入力されていません')
    } 
    }
    // 投稿があれば表示
    const list = () =>{
      if(postList.length>=1){
        return  postList.map((s) => 
      <p key={s.id}>{s.post}</p>)
      }
      else{
        return <div className='text'><p>投稿がありません</p></div>
      }
    }

  console.log(postList)

  return (
    <div className='thread'>
      <h3>{title}</h3>
      <div className='res'>
        {list()}
      </div>
      <div className='submit'>
        <textarea value={text} onChange={handleChange}></textarea><br/>
        <button onClick={onClickUpdate}>投稿する</button>
      </div>
    </div>
  )
}
