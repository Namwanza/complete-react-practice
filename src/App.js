import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    student: [
      {id: 'kdkdk', name: 'Roger', age: 15},
      {id: 'heyeje', name: 'Ronnie', age: 17}
    ]
  }

  nameChangedHandler = (event, id) => {
    const studentIndex = this.state.student.findIndex(person => {
      return person.id === id;
    })

    const myStudent = {
      ...this.state.student[studentIndex]
    }

    myStudent.name = event.target.value;
    const displayStudent = [...this.state.student];
    displayStudent[studentIndex] = myStudent;
    this.setState({
      student: displayStudent
    })
  }

  render () {
    return (
      <div className="App">
        {
          this.state.student.map(p => {
            return (
              <Person 
                name = {p.name} 
                changed = {(event) => this.nameChangedHandler(event, p.id)}
                key = {p.id}
              />
            );
          })
        }
        {/* <Person name = "Roger" /> */}
        {/* <Person name = "Ronnie" /> */}
      </div>
    );
  }
}

export default App;
