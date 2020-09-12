import React from 'react';
import './Input.css';

const InputDisabled = (props: { disabled: boolean, placeholder: string, id: string }) => {
  return (
    <input type="text" placeholder={props.placeholder} disabled={props.disabled} id={props.id}></input>
  );
}

export default InputDisabled;
