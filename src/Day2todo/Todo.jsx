import React from 'react'
import { useState } from 'react'
import {nanoid} from "nanoid"
import TodoItem from './TodoItem'
import "./Todo.css"

function TodoList() {
    const [task,setTask]=useState("") //individual task
    const [todo,setTodo]=useState([]) // array of task

    const handleChange =(e)=>{
        console.log(e.target)
        setTask(e.target.value)
    }
    const handleClick=()=>{
        const taskObj={
            title:task,
            status:false,
            id:nanoid()
        }
        setTodo([...todo,taskObj])
    }

    const handleDelete=(id)=>{
        console.log(id)
        let newTodo= todo.filter(item=>item.id != id)//all array with the filtered data
        setTodo(newTodo)
    }
    return (
        <>
            <input
            className='inp'
            type="text" 
            placeholder='Enter task'
            value={task}
            onChange={handleChange}
            />
            <button className='btn1' onClick={handleClick}>+</button>
           
            {todo.map((item)=>{
                return <TodoItem key={item.id} {...item} handleRemove={handleDelete}/>
            })} 
        </>
    )
}

export default TodoList


