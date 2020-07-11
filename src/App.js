import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const Button = styled.button `
  padding: 10px;
  background-color: ${props => props.alt = 'green'};
  border-style: none;
  color: white;
  margin: 10px;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.alt = 'red'}
  }
`;

const App = () => {
  const [name, stateChanged] = useState(['Roger', 'Willy', 'Ronnie']);
  const [setButton, buttonChanged] = useState(false)

  const nameChangedHandler = (event, index) => {
    const displayPerson = [...name];
    // console.log(displayPerson)
    displayPerson[index] = event.target.value
    stateChanged(displayPerson)
  }

  const toggleButton = () => {
    buttonChanged(!setButton)
  }

  let showPerson = null
  if (!setButton) {
    showPerson = <div>
      <div>{name.join(', ')}</div>
      {
        name.map((p, id) => 
        <Person 
          name = {p} 
          key = {id}
          alt = {p}
          change = {(event) => nameChangedHandler(event, id)}
        />
      )}
    </div>
  } else {
    showPerson = null;
  }

  return (
    <div className="App">
      <Button onClick={toggleButton}>switch Names</Button>
      {showPerson}
    </div>
  );
}

export default App;
