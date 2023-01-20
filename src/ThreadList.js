import * as React from 'react'
import axios from 'axios'
import { useState } from 'react'


export const ThreadList = () => {

  const [thread,setThread] = useState()

  axios.get("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com")
    .then(res =>{
      console.log(res.data);
      setThread(res.data)
    })
    
  return (
    <div className='thread'>
      <h2>新着スレッド</h2>
      <div className='threadList'>
        <p>{thread}</p>
      </div>
    </div>
  )
}

