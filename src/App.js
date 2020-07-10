import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';
import Radium from 'radium';

class App extends Component { 
  state = {
    persons: [
      {id: 'hsisi', name: '', age: 27},
      {id: 'eslkd', name: '', age: 26},
      {id: 'ossk', name: '', age: 1},
    ], 
    userInputs: ''
  }

  nameChangedHandler = (event, id) => {
    const PersonIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const y = {
      ...this.state.persons[PersonIndex]
    }

    y.name = event.target.value;
    const x = [...this.state.persons];
    x[PersonIndex] = y;
    this.setState({
      persons: x
    })
  }

  deletePersonHandler = (index) => {
    const PersonIndex = [...this.state.persons];
    PersonIndex.splice(index, 1);
    this.setState({
      persons: PersonIndex
    })
  }

  // Adding two binding
  nameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 27},
        {name: 'Ronnie', age: 25},
        {name: 'Namwanza', age: 20},
      ], 
    })
  }

  render () {
    const Persons = this.state.persons.map(person => {
      return (
       <Person 
         name = {person.name} 
         age = {person.age}
         key = {person.id}
         changed = {(event) => this.nameChangedHandler(event, person.id)}
         deleted = {() => this.deletePersonHandler(person.id)}
       />
      )
    })

    // Dynamically changing classNames
    let Button = [];
    this.state.persons.map(p => {
      return (
        !p.name ? Button.push('Button-style') : Button.push('Button-style-02')
      )
    })
    
    
    return (
      <div className="App">
        <h4>Setting ClassNames Dynamically</h4>
        <button style={{
          padding: '10px', 
          margin: '10px'}}
          onClick = {() => this.nameHandler('Vanpretty')}
          className = {Button.join(' ')}
        >
          Name Changed
        </button>
        {Persons}
      </div>
    );
  }
}

export default Radium(App);
