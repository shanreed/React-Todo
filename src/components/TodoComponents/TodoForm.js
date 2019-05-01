import React from 'react';

const TodoForm = props => {
    return (
      <form onSumbit = {props.addTodo}>
        <input
          placeholder = "Task"
          onChange = {props.changeHandler}
        />
  
        <button type = "submit">Add Todo</button>
        <button type = "submit">Clear Completed</button>
      </form>
    );
  };
  
  export default TodoForm;
  