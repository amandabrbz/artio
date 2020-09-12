import React from 'react';
import './Input.css';

const InputDisabled = (props: { id: string }) => {
  return (
    <input type="text" placeholder="not available" disabled id={props.id}></input>
  );
}

export default InputDisabled;
