import React from 'react';
import './Label.css';

function Label(props: {name: string, htmlFor: string}) {
  return (
    <label htmlFor={props.htmlFor}>{props.name}</label>
  );
}

export default Label;
