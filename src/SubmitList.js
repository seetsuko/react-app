import * as React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export const SubmitList = () => {

  // スレッドのid,titleをThreadListから取得
  const { state } = useLocation()
  const urlId = state.threadData.id
  const title = state.threadData.title

  const [postList, setPostList] = useState([])
  const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${urlId}/posts`

  // 投稿一覧API取得
  console.log(url)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => 
        setPostList(Object(data.posts))
      )
      console.log(text)
  }, [])
  

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

  const [text, setText] = useState('')
  // 入力内容をstateに格納
  const handleChange = (e) => {
    setText(e.target.value)
  }

  // 投稿ボタン押下
  const onClickUpdate = () => {
    // 入力があればAPIにPOST
    if(text.length>=1){    
    axios.post(url, {
      "post": text,
    })
      .then(res => {
        fetch(url)
        .then(res => res.json())
        .then(data => 
        setPostList(Object(data.posts))
        )
        // textareaを空にする
        setText("")
      })
    }else{
      // 入力が無ければアラート
      alert('投稿内容が入力されていません')
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
