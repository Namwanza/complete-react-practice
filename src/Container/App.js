import React, { Component } from 'react';
import './App.css';
import Person from '../Persons/Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'kskhd', name: 'Roger', age: 24},
      {id: 'iedjd', name: 'Willy', age: 23},
      {id: 'wiwkd', name: 'Jude Mark', age: 26}
    ]
  }

  nameSwitchedHandler = (newName) => {
    this.setState({
      persons: [
        {id: 'kskhd', name: newName, age: 25},
        {id: 'iedjd', name: 'Ronnie', age: 22},
        {id: 'wiwkd', name: 'Angel', age: 25}
      ]
    })
  }

  deleteNameHandler = (index) => {
    const nameDelete = [...this.state.persons];
    nameDelete.splice(index, 1);
    this.setState({
      persons: nameDelete
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const Person = {
      ...this.state.persons[personIndex]
    }

    Person.name = event.target.value;
    const myPerson = [...this.state.persons]
    myPerson[personIndex] = Person;
    this.setState({persons: myPerson})
  }
 
  render () {
    return (
      <div className="App">
        <button onClick = {() => this.nameSwitchedHandler('Henry')} >Switch Names</button>
        <Person
          member = {this.state.persons}
          changed = {this.nameChangedHandler} 
          delete = {this.deleteNameHandler}
        />
      </div>
    );
  }
}

export default App;
