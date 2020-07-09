import React from 'react';

const Validation = (props) => {
    let PrintTextLength = null;
    if (props.textLength > 5) {
        PrintTextLength = <p>Text too long</p>
    } else {
        PrintTextLength = <p>Text too short</p>
    }
    return(
        <div>
           {PrintTextLength}
        </div>
    )
}

export default Validation;
