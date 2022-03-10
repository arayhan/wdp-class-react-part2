import React from "react";

function Button({text, ...props}) {

  return <button style={{display: 'flex', alignItems: 'center'}}>
    <span>{props.iconSuffix}</span>
    <span style={{padding: '0 8px'}}>{text}</span>
    <span>{props.iconPrefix}</span>
    {props.size}
    </button>;
}

export default Button;
