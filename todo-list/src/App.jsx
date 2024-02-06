import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  

  const NewValue = (e) => {
    setNewTask(e.target.value);
  };

  const AddValue = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false
    };

    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  const DeleteValue = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const CompleteTask = (id) => {
    setTodoList(
      todoList.map((task)=>{
        if(task.id === id){
          return {...task,complete:!task.complete}
        }
        else{
          return task
        }
      })
    )
  }

  return (
    <>
      <div>
        <input type="text" onChange={NewValue} />
        <button onClick={AddValue}>Add Task</button>
      </div>
      <div>
        {todoList.map((task, key) => {
          return (
            <Task
              key={key}
              taskName={task.taskName}
              id={task.id}
              complete={task.complete}
              DeleteValue={DeleteValue}
              CompleteTask={CompleteTask}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
