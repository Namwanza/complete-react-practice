import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/validation';
import Char from './Char/Char';
import Styled from 'styled-components';

const P = Styled.p`
    color: ${props => props.alt ? 'black' : 'red'};
    &:hover {
      color: ${props => props.alt ? 'purple' : 'green'};
    }
`;

class App extends Component {
   state={
     test:'',
     testing: false
   }

   handleChange = (e) =>{
     this.setState ({
        test: e.target.value
     })
   }

   deleteHandler = (index) => {
     let testIndex = this.state.test.split('');
     testIndex.splice(index, 1);
     const deleteTest = testIndex.join('');
     this.setState({
       test: deleteTest,
       testing: true
     })
   }
  render () {
    const displayCharLists = this.state.test.split('').map((ch, id) => {
      return (
        <Char 
            character = {ch}
            key = {id}
            clicked = {() => this.deleteHandler(id)}
        />
      );
    })
    return (
      <div className="App">
        <input 
          value={this.state.test} 
          alt={this.state.testing ? true : undefined}
          style={{
            border: '1px solid black'
          }}
          onChange={this.handleChange} 
        />

        {/* outputting states length */}
        <P alt = {this.state.testing ? true : undefined}>
          {this.state.test.length}
        </P>

        {/* validation */}
        <Validation 
          textLength={this.state.test.length}
        />

        {/* Char */}
        <P alt = {this.state.testing ? true : undefined}>{displayCharLists}</P>
      </div>
    )
  }
}

export default App;
