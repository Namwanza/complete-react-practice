import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Roger', age: 23},
      {name: 'Nantume', age: 25},
      {name: 'Ronnie', age: 25},
      {name: 'Willy', age: 22},
      {name: 'Henry', age: 26}
    ],
    showPerson: true
  }

  showPersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Pauline", age: 12},
        {name: event.target.value, age: 30},
        {name: 'Trisha', age: 13},
        {name: 'Sarah', age: 12},
        {name: 'Lilian', age: 16}
      ]
    })
  }

  render () {
    // line styles
    const buttonOne = {
      backgroundColor: 'green',
      padding: '10px',
      margin: '10px',
      border: '1px solid green',
      borderRadius: '5px',
      color: 'white',
      fontSize: '15px'
    }
    
    return (
      <div className="App">
         <h1>React App</h1>
         <button 
            style={buttonOne}
            onClick = {this.showPersonHandler}
            >switch Names</button>

        {
          this.state.showPerson ? 
          <div>
            {
              this.state.persons.map(person => {
                return (
                  <Person 
                      name = {person.name}
                      age = {person.age}
                      change = {this.nameChangedHandler}
                      click = { () => this.nameChangedHandler("Hanifah")}
                  /> 
                )
              })
            }
          </div>
          : 
          null
        }
       
      </div>
    );
  }
}

export default App;
