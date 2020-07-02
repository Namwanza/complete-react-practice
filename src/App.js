import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'row1', name: 'Roger', age: 23},
      {id: 'row2', name: 'Nantume', age: 25},
      {id: 'row3', name: 'Ronnie', age: 25},
      {id: 'row4', name: 'Willy', age: 22},
      {id: 'row5', name: 'Henry', age: 26}
    ],
    showPerson: true
  }

  showPersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const namedPerson = {
      ...this.state.persons[personIndex]
    }

    namedPerson.name = event.target.value;
    const myPerson = [...this.state.persons];
    myPerson[personIndex] = namedPerson;

    this.setState({
      persons: myPerson
    })
  }

  deletePersonHandler = () => {
    const myPerson = [...this.state.persons];
    myPerson.shift()
    this.setState({
      persons: myPerson
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

    const totalAge = this.state.persons.reduce((age, person) => age + person.age, 0)

    
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
              this.state.persons.map((person, index) => {
                return (
                  <Person 
                      name = {person.name}
                      age = {person.age}
                      key = {person.id}
                      change = {(event) => this.nameChangedHandler(event, person.id)}
                      click = {() => this.deletePersonHandler(index)}
                  > 
                    Hey I can also render
                  </Person>
                )
              })
            }
          </div>
          : 
          <div>
            Total Age = <strong>{totalAge}</strong>
          </div>
        }
       
      </div>
    );
  }
}

export default App;
