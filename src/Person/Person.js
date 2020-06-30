import React from 'react';
import Student from '../Student/Student'

const Person = (props) => {
    return (
      <div>
         <h1>Hey I'm a Component Person</h1>
         <span>{props.assignment}</span> /
         <span> {props.homework} </span>/
         <span> {props.children} </span>
         <Student age = {24} />
      </div>
    )
}
export default Person;