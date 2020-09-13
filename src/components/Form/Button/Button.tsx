import React from 'react';
import './Button.css';

function Button(props: { name: string }) {
  return (
    <button type="submit">{props.name}</button>
  );
}

export default Button;
