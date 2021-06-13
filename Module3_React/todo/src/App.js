import React, { Component } from "react";
import InputBox from "./components/InputBox/InputBox.jsx";
import TodosList from "./components/TodosList/TodosList.jsx";

class App extends Component {
  state = {
    todos: [
      { id: "1", todo: "Learn JSX" },
      { id: "2", todo: "Learn Css" },
      { id: "3", todo: "Learn ES6" },
      { id: "4", todo: "Learn React" },
      { id: "5", todo: "Learn JS" },
    ],
  };

  deleteTodo = (id) => {
    let updatedTodos = this.state.todos.filter(function (todoObj) {
      if (todoObj.id == id) {
        return false;
      }
      return true;
    });
    // console.log(updatedTodos);
    this.setState({
      todos: updatedTodos,
    });
  };

  addTodo = (todo) => {
    let updatedTodos = [
      ...this.state.todos,
      { id: this.state.todos.length + 1, todo: todo },
    ];
    this.setState({
      todos:updatedTodos
    })
  };

  render() {
    let todos = this.state.todos;
    let deleteTodo = this.deleteTodo;
    let addTodo = this.addTodo;
    return (
      <div className="App">
        <InputBox addTodo={addTodo} ></InputBox>
        <TodosList todos={todos} deleteTodo={deleteTodo}></TodosList>
      </div>
    );
  }
}

export default App;
