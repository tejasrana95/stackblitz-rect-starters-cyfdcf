import React from 'react';
import './button.css';

export default function Button(props) {
  console.log(props);
  if (props.type === 'link') {
    return (
      <a href={props.url} className="btn" target="_blank">
        {props.text}
      </a>
    );
  }
  return <button className="btn">{props.text}</button>;
}
