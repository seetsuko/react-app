import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// スレッド一覧コンポーネント
export const ThreadList = () => {
  const [thread, setThread] = useState([])

  // API取得
  useEffect(() => {
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads')
      .then(res => res.json())
      .then(data => {
        setThread(data)
      })
  }, [])

  console.log(thread)
  return (
    <div className='thread'>
      <h3>新着スレッド</h3>
      
      <div className='threadList'>
        {thread.map((s) => {
          return (
            <div key={s.id} >
              <Link to={`submitList/${s.id}`} state={{threadData:s}}><p>{s.title}</p></Link>
            </div>
          )
        })}
      </div>
      <Link to='newThread'><button>スレッドを立てる</button></Link>
    </div>
  )
}
