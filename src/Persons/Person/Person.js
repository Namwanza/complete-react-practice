import React from 'react';
import Persons from '../Persons';

const myPerson = (props) => {
    return (
        <div>
            {
                props.member.map( (person, index) => {
                    return (
                    <Persons
                        name = {person.name}
                        age = {person.age}
                        key = {person.id}
                        change = {(event) => props.changed(event, person.id)}
                        click = {() => props.delete(index)}
                    />
                )})
            }
        </div>
    )
}
export default myPerson;