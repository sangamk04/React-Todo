import React from 'react'

function TodoItem(props) {
   
    const {title,id,handleRemove}=props
  return (
    <>
    <div className='cont'>
        <h1>{title}</h1>
        <button className='btn2' onClick={()=>handleRemove(id)}>Delete</button>
    </div>
      
    </>
  )
}

export default TodoItem
