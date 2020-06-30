import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    name: "Skyla"
  }

  nameChangedHandler = () => {
    this.setState({
      name: "Vanpretty"
    })
  }

  render () {
    return (
      <div className="App">
        <span> {this.state.name} </span>
        <button onClick = {this.nameChangedHandler} >switch Names</button>
        <Person 
          assignment = "Computer Science" 
          homework = "Arithematic operators"
        >
          Hey am a child
        </Person>
      </div>
    );
  }
}

export default App;
