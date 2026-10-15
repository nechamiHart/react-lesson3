import { useState } from "react"
import TodoItem from "./TodoItem"
import './TodoList.css'

export default function TodoList(){

    const [arrTask,setArrTask] = useState(["clean","cook","homework"])

    function isExist(task) {
        return arrTask.includes(task);
    }

    function addTask(newTask) {
        if (isExist(newTask)) {
            alert("המשימה הזו כבר קיימת!");
            return;
        }
        setArrTask([...arrTask,newTask])
               console.log(arrTask)
    }  

    return (
        <>
        <TodoItem add={addTask} />
        { arrTask.map ((item,index)=> <li key={index}>{item}</li>)}
        </>
    )
}