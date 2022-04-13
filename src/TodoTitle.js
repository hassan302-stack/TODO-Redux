import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import {addNote} from "./Action/index"
 

function TodoTitle() {
const mydata=useSelector((state)=>state.TodoFeatures) 

const [data , setdata] = useState("")
 const dispatch=useDispatch()
useEffect(()=>{
  if(mydata.edit.status){
    setdata(mydata.edit.value);
  }
},[mydata])
  return (
    <>
       <div className="titleBody tableForm">
        <div > <input type="text"  name="" id="" placeholder='Todo...' value={data}   onChange={(e)=>setdata(e.target.value)}/></div>
        {
          mydata.edit.status ?<button className ='add' onClick={(e)=>dispatch({type:"updated",payload:data})}>Update</button>:<button className='add'  onClick={(e)=>dispatch(addNote(data))} ><i>+</i></button>
        }
        </div>
    </>
  )
}

export default TodoTitle