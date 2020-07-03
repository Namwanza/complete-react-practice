import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div>
            <p>Username</p>
            <p>
                <strong>{props.username}</strong>
            </p>
        </div>
    );
};

export default UserOutput;