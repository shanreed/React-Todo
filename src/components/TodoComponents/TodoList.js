// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';


const todoArray = ["Make doctor's appointment", "Visit kids schools", "Make Bank Deposit", "Buy groceries",
 "Complete class project"]

const TodoList = () => {
    return (
        <div>
      <h1>Todo List:</h1>
      <div className="todo-list">
        {todoArray.map(item => (
          <Todo todoArray = {item} />
        ))}
      </div>
    </div>
    )
}



export default TodoList;


