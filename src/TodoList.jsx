import TodoItem from "./TodoItem"

export default function TodoList(){

    const arrTask = ["clean","cook","homework"]

    return (
        <>
        { arrTask.map ((item)=> <TodoItem key={item} title={item} /> )}
        </>
    )
}