import React from 'react';
import person from  "./Person.css";
import TextField from '@material-ui/core/TextField'

const Person = (props) => {
    const styles = {
        margin: '10px',
        textAlign: 'center'
    }

//    1. Material UI designs
//    2. Bootstraps
//    3. Styled components
    return (
      <div>
        <p>Am <span>{props.name}</span> and I'm {props.age} </p>
        <p> {props.children} </p>
        <div className="Person">
            <TextField 
                variant="outlined" 
                label = "Name" 
                style={styles}
                value={props.name} 
                onChange={props.change}
            />

            <TextField 
                variant="outlined" 
                label = "Age" 
                style={styles}
                value={props.age} 
                onChange={props.change}
            />
          {/* <input 
              type="text" 
              
              style={styles}
          />
          <input 
              type="text" 
              value={props.age} 
              style={styles}
              onChange={props.change}
          /> */}
          </div>
      </div>
    )
}
export default Person;