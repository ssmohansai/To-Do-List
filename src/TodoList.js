import React from 'react'

function TodoList  ({todolist,deleteHandler}) {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h1>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h1>
            </div>)}
        </div>
    )
}

export default TodoList