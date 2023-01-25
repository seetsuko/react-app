import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export const ThreadList = () => {
  const [thread, setThread] = useState([])

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
            <Link to='submitList' key={s.id} state={{id:s.id}}><p>{s.title}</p>
            </Link>
          )
        })}
      </div>
      <Link to='newThread'><button>スレッドを立てる</button></Link>
    </div>
  )
}
