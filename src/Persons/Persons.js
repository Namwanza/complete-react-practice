import React from 'react';
// import Student from '../Student/Student'

const Person = (props) => {
  const styles = {
     boxShadow: 'inset 5px 0 5px 0 red',
     backgroundColor: 'rgb(62, 255, 62)',
     borderStyle: 'none',
     width: '50%',
     textAlign: 'center',
     padding: '7px',
     margin: '0 0 30px 0'
  } ;
  return (
    <div>
      <p onClick = {props.click}>
        Name: <strong> {props.name} </strong>  and 
        I'm <strong> {props.age} </strong>  years old </p>
      <input 
        style={styles}
        type='text' 
        value = {props.name}  
        onChange = {props.change}
      />
    </div>
  )
}
export default Person;