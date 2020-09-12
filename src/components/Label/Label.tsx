import React from 'react';
import './Label.css';

function Label(props: {name: string, htmlFor: string, className: string}) {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>{props.name}</label>
  );
}

export default Label;
