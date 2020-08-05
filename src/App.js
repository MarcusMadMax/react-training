import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  addTodo = (data)=>{

    var newTodo = {
      id: Date.now(),
      ...data
    }

    var newList = [newTodo, ...this.state.todos]
    this.setState({
      todos: newList
    })

  }
  removeTodo = (id)=>{
    var todos = this.state.todos

    var filtered = todos.filter((todo)=>{
      return todo.id != id
    })

    this.setState({
      todos: filtered
    })

  }

  updateTodo = (id,data)=>{
    // id = 1
    // data = {
    //   content: 'Water house plants and garden'
    // }
    var todos = this.state.todos
    var updated = todos.map((todo)=>{
      return (todo.id == id) ? {...todo,...data} : todo
    })
    this.setState({
      todos:updated
    })
  } 

  

  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">

         
            {
              this.state.todos.map((todo)=>{

                var todoProps = {
                  key: todo.id,
                  removeTodo: this.removeTodo,
                  updateTodo: this.updateTodo,
                  ...todo
                }
                return (

                  <Todo {...todoProps}/>

                )
              })

            }
            
       
            <NewTodoForm addTodo={this.addTodo}/>

          </div>
        </div>
      </div>
    )
  }

}

export default App;
