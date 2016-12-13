import React from 'react';
import './field.scss';

const Field = ({type='text', label, value, required}) => {

  const handleChange = (e) => {
    console.log(e.target.value);
    //this.props.onChange(e.target.value, this.props.id);
  };

  return (
    <div className="field">
      <label>{label}</label>
      <input  value={value} onChange={handleChange} required={required}/>
      <div className="field-line"/>
    </div>
  )
}

export default Field;
