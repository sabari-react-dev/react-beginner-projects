import { useState } from "react";
const TodoList=()=>{
    const[todos,setTodos]=useState([]);
    const [text,setText]=useState("");

    const addTodo=()=>{

        console.log(todos)
        if(!text.trim()) return;
        setTodos([...todos,{id:Date.now(),text,completed:false}]);
        setText("")
    }

    const toggleTodo=(id)=>{
        setTodos(todos.map((todo)=>
            todo.id===id?{...todo, completed:!todo.completed}:todo
        )

        )
    }

    const deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }

    return(
        <div>
            <h1>Todo List application</h1>
            <input type="text" value={text} placeholder="Enter Todo..." onChange={(e)=>setText(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>
            {
                todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={{textDecoration:todo.completed?"line-through":"None"}}>{todo.text}</span>
                        <button onClick={()=>toggleTodo(todo.id)}>{todo.completed?'Not completed':'Completed'}</button>
                        <button onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
                    </li>
                )

                )
            }
        </div>
    )

}

export default TodoList;