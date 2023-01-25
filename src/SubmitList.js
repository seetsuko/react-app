import * as React from 'react'
import { useState, useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'



export const SubmitList = () => {

  const { state } = useLocation()
  const urlId = state.id
  const navigation = useNavigate()
  const [resList, setResList] = useState([])


  useEffect(() => {
    fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${urlId}/posts`)
      .then(res => res.json())
      .then(data => {
        setResList(Object(data.posts))
      })
  }, [])

  console.log(resList)
  return (
    <div className='thread'>
      <h3>新着れす</h3>
      <div className='threadList'>
        {resList.map((s) => {
          return (
            <p key={s.id}>{s.post}</p>
          )
        })}
      </div>
        <button 
        onClick={()=>navigation(
          '/newSubmit',{state:{id:urlId}}
          )}>
            レスを投稿
        </button>
    </div>
  )
}
