import React from 'react';

function TodoForm(props) {  //Why is value set to {props.value}
    return (
        <div> 
        <input onChange = {props.changeTodo} type = 'text' placeholder = 'add todo' name="todo"
        value={props.value} /> 
        
       <button onClick= {props.addTodo}>Submit</button>
       <button>Cear</button>
       </div>
    )
}

export default TodoForm;