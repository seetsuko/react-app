import * as React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom' 


export const ThreadList = () => {

  const [thread,setThread] = useState([])

  useEffect(() => {
    
  fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads")
    .then(res => res.json())
    .then(data => {
      setThread(data)
    })
    
  },[])

  console.log(thread);
    
  return (
    <div className='thread'>
      <h3>新着スレッド</h3>
      <div className='threadList'>
        {thread.map((s) => {
          return(
            <p key={s.id}>{s.title}</p>
          )
        })}
      </div>
      <Link to="newThread"><button>スレッドを立てる</button></Link>
    </div>
  )
}

