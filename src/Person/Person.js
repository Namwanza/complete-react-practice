import React from 'react';

const Person = (props) => {
    return (
      <div>
        <input 
            type = "text" 
            value = {props.name} 
            onChange = {props.change}
        />
      </div>
    )
}
export default Person;