import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled.button `
  background-color: ${props => props.alt ? 'green' : 'red'};
  border: 1px solid blue;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  color: white;
  font-size: 15px;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
    border-radius: 5px;
  }
`;

class App extends Component {
  state = {
    persons: [
      {id: 'row1', name: 'Roger', age: 23},
      {id: 'row2', name: 'Nantume', age: 25},
      {id: 'row3', name: 'Ronnie', age: 25},
      {id: 'row4', name: 'Willy', age: 22},
      {id: 'row5', name: 'Henry', age: 26}
    ],
    showPerson: false
  }

  showPersonHandler = () => {
    this.setState({
      showPerson: true
    })
  }

  hidePersonHandler = () => {
    this.setState({
      showPerson: false
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

  render () {

    const totalAge = this.state.persons.reduce((age, person) => age + person.age, 0)

    
    return (
      <div className="App">
         <h1>React App</h1>

          <Button 
            variant="contained"
            color = 'secondary'
            onClick = {this.showPersonHandler} 
            style = {{ textTransform: "capitalize"  }}>
              show Person
          </Button>
          <StyledButton
              
              alt={this.state.showPerson}
              onClick = {this.hidePersonHandler}
            >Hide Person</StyledButton>

        {
          this.state.showPerson ? 
          <div>
            {
              this.state.persons.map(person => {
                return (
                  <Person 
                      name = {person.name}
                      age = {person.age}
                      key = {person.id}
                      change = {(event) => this.nameChangedHandler(event, person.id)}
                      // click = { () => this.nameChangedHandler("Hanifah")}
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
