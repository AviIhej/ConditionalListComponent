import React from 'react';


// Component is just a function that returns some jsx code
const Validation = (props) => {

    let validationMessage = "Text long enough"
    if (props.inputLength < 5){
        validationMessage = "Text to short"
    }

    return(
        <div className="ValComp">
            <p>{validationMessage}</p>
        </div>
    );
}

export default Validation;