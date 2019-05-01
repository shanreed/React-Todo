import React from 'react';
import TodoList from './TodoList.js';



const Todo = props => {
    return (
        <div className = 'to-do'>
            <p>{props.todoArray}</p>
        </div>

    )
}

export default Todo;