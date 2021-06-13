import React, { Component } from 'react';
import InputBox from "./components/InputBox/InputBox.jsx";
import TodosList from "./components/TodosList/TodosList.jsx";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <InputBox></InputBox>
        <TodosList></TodosList>
      </div>
    );
  }
}

export default App;
