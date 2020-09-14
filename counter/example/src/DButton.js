import React from 'react';

const DButton = (props) => {
    return <button onClick={
        e => {
            props.DecrementClickButton()
        }
    }>Decrement Count</button>
}

export default DButton