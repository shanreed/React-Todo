import React from 'react';
import './Todo.css';



const Todo = props => {
    console.log(props)
  
    return (
        <div
        //when the item is clicked draw a line through text
     style={props.todo.completed ? { 
         textDecoration: 'line-through' } : null}
     onClick={() => props.handleToggleComplete(props.todo.id)}
   >
   {props.todo.task}
   </div>
    )
}

export default Todo;