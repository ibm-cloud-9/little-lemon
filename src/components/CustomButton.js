import React from 'react';

function CustomButton(props) {
    return <button name={props.name} style={props.style}>{props.value}</button>
}

export default CustomButton;