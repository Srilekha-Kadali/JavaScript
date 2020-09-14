import React from 'react';

//props is expecting clickButton
const IButton = (props) => {
    return <button onClick={
        e => {
            props.IncrementClickButton()
        }
    }>Counter</button>
}

export default IButton

//In App.js, clickButton calls Button.js>props.clickButton()
//which in turm calls App.js>this.handleClick
//which in turn calls App.js>handleClick()