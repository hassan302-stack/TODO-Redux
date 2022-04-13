import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function TodoBody() {
  const dispatch=useDispatch()
  const mydata= useSelector((state)=> state.TodoFeatures)
    return (
    <>
    <div className="listItems">
    {mydata&& mydata.text.map((val,i)=>(
      <div className="titleBody Bodylistitem" key={i}>
        <div >{val}</div>
        <div className="buttons">
        <button className='add' onClick={()=>dispatch({type:"edit",payload:{value:val,id:i,status:true}})}>Edit</button>
        <button className =' delete ' onClick={()=>dispatch({type:"delete",payload:i})}>Delete</button>
        </div>
      </div>
    ))}
    </div>
    <div className='removeAll'>
    <button className ='delete remove' onClick={()=>dispatch({type:"clearAll"})}><i>Remove All</i></button>
    </div>
</>
  )
}
export default TodoBody