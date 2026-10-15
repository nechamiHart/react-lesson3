import { useState } from "react"

export default function TodoItem({add}){

   const [currentTask,setCurrentTask]= useState("")

    function changeText (event)
    {
        setCurrentTask(event.target.value)       
    }
    function addTask(){
        if (!currentTask.trim())
             return;
        add(currentTask)
        setCurrentTask("")
    }

    return (
        <>
        <div>
                <label htmlFor="task">add task...</label>
                <input type="text" id="task" name="task" value={currentTask} onChange={changeText} required></input>
        </div>
        <button type="button" onClick={addTask}>הוסף לרשימת המטלות</button>
            {/* <h1>{title}</h1> */}
        </>
    )
}