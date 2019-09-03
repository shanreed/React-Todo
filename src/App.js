import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
    todo: ''
  }

    }

    addTodo = e => {
      e.preventDefault();
      const newTodo = { 
        task: this.state.todo, 
        completed: false, 
        id: Date.now() 
      };

      this.setState({ 
        todos: [...this.state.todos, newTodo], 
        todo: '' //What does this do
      });
    };

    changeTodo = e => this.setState({ [e.target.name]: e.target.value });
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
       <TodoList todos = {this.state.todos}/>
       <TodoForm
          value={this.state.todo}
          addTodo={this.addTodo}
          changeTodo={this.changeTodo}
          
        />
      </div>
    );
  }
}


export default App;
