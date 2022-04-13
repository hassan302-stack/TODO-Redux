import React from 'react'
import { useSelector } from 'react-redux'

function TodoCount() {
  const mydata= useSelector((state)=> state.TodoFeatures)
  return (
    <>
    <div className='counterBody'>
     <h3 style={{margin:"0px",padding:"0px"}}>Total Todo-Lists</h3><span className='count' style={{fontSize:"22px"}}>{mydata.text.length}</span>
    </div>
    </>
  )
}

export default TodoCount