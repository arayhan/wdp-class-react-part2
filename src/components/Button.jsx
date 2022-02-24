import React from "react";

function Button() {
  return <button>Button</button>;
}

export function ButtonFinish({ text, textContoh, button }) {
  return (
    <>
      <button>{text}</button>
      <button>{textContoh}</button>
      {button}
    </>
  );
}

export default Button;
