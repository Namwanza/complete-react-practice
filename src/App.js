import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    counter: 0
  }

  counterHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentWillMount() {
    console.log('render componentWillMount')
  }

  componentDidMount() {
    console.log('render componentDidMount')
  }


  shouldComponentUpdate(newProps, newState) {
    console.log('render shouldComponentUpdate')
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('render componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('render componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('render componentWillUnmount')
  }

  render () {
    return (
      <div className="App">
        <button onClick = {this.counterHandler}>switch Names</button>
        <Person 
          counted = {this.state.counter}
        />
      </div>
    );
  }
}

export default App;
