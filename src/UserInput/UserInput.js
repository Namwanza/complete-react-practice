import React from 'react';

const UserInput = (props) => {
    const styles = {
        backgroundColor: 'green',
        padding: '10px',
        margin: '10px',
        color: 'white',
        textAlign: 'center',
        borderStyle: 'none',
        borderRadius: '5px'
    }

    return (
        <input 
            type="text" 
            onChange={props.change}
            value={props.newName}
            style={styles}
        />
    );
}

export default UserInput;