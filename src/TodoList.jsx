export default function TodoList(){

    const arrTask = ["clean","cook","homework"]

    return (
        <>
        { arrTask.map ((item)=> <h2>{item}</h2> )}
        </>
    )
}