import './css/todo.css'
import  { useState, useRef, useEffect } from 'react'
import TodoItems from './todoitems'

let no = 0
const Todo = () => {
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)

  const add = () => {
    setTodos([...todos, {no:no++,text:inputRef.current.value,display:''}])
    inputRef.current.value = ''
    localStorage.setItem("todos_count",no)
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
    no = localStorage.getItem("todos_count")
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    })
  },[todos])
  
  return (
    <div className='todo'>
      <div className="todo-header">
        To-Do List
      </div>
      <div className='todo-add'>
        <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input'/>
        <div onClick={()=>{add()}} className='todo-add-btn'>ADD</div>
      </div>
      <div className="todo-list">
          {todos.map((item,index)=>{
            return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
          })}
      </div>
    </div>
  )
}

export default Todo;