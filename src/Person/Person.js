import React from 'react';

const Person = (props) => {
    return (
      <div>
        <input 
            type="text" 
            disabled 
            value = {props.name ? props.name : 'Max'} 
        />
        <input 
            type="text" 
            value = {props.name} 
            onChange = {props.changed}
        />
      </div>
    )
}
export default Person;