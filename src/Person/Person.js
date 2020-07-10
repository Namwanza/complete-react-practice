import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    const styles = [];
    if (props.name.length >= 3 && props.name.length < 6) {
        styles.push('Input-01')
    } else if (props.name.length >= 6 && props.name.length < 10) { 
        styles.push('Input-02')
    } else if (props.name.length >= 10) {
        styles.push('Input-03')
    } else {
        styles.push('')
    }

    // let rnd = Math.random();
    // if (rnd > 0.9) {
    //     throw Error('Something went wrong')
    // }

    return (
        <div>
            <p onClick = {props.deleted}> My name is: {props.name} and I'm {props.age} years old </p>
            <input 
                
                type = "text"
                value = {props.name}
                onChange = {props.changed}
             />
        </div>
    )
}

export default Radium(Person);