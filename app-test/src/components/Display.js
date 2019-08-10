import React from 'react';

const Display = (props) => {
    return (
        <> 
        <div>strikes: {props.strikes}</div>
        <div>balls: {props.balls}</div>
        </>
    )
};

export default Display;