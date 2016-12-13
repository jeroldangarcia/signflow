import React from 'react';
import './form.scss';

const Form = (props) => {
  return (
    <div className="formu">
      <h4>{props.title}</h4>
      {props.children}
    </div>
  )
}

export default Form;
