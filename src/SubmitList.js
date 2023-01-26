import * as React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export const SubmitList = () => {

  const { state } = useLocation()
  const urlId = state.threadData.id
  const title = state.threadData.title
  const [resList, setResList] = useState([])
  const [text, setText] = useState('')
  const [error,setError] = useState()
  const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${urlId}/posts`

  console.log(urlId)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setError(data.posts)
        setResList(Object(data.posts))  
      })
  }, [])

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
       // トップページに戻る
      return (
      window.location.href = '/submitList'
    )
    }

  // レスが無い時とあるときで表示を変える
  const list = () =>{
    if(error === null){
      return <p>レスがありません</p>
    }else{
      return  resList.map((s,index) => 
        <p key={s.id}>{s.post}</p>
      )
    }
  }
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
