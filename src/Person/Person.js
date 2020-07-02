import React from 'react';
import person from  "./Person.css";

const Person = (props) => {
    const styles = {
        margin: '5px',
        textAlign: 'center'
    }
    return (
      <div>
        <p>Am <span>{props.name}</span> and I'm {props.age} </p>
        <p> {props.children} </p>
        <div className="Person">
          <input 
              type="text" 
              value={props.name} 
              onChange={props.change}
              style={styles}
          />
          <input 
              type="text" 
              value={props.age} 
              style={styles}
              onChange={props.change}
          />
          </div>
      </div>
    )
}
export default Person;