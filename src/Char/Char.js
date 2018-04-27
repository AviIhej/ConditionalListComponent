import React from 'react';
import './Char.css'

const Char = (props) => {
    return(
        <div className="char" onClick={props.clicked}>
            <h1>{props.character}</h1>
        </div>
    );
}

export default Char;