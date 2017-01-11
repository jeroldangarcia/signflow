import React from 'react';

// components
import Icon from './icon';

// styles
// import './field.scss';

/**
 * InfoField
 */
class InfoField extends React.Component {

  state = {
    value: this.props.value,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value != this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      this.handleDone();
      this.handleBlur();
    }
  }

  handleChange = (e) => {
    const newValue = e.target.value;
    this.setState({ value: newValue });
  }

  handleBlur = (e) => {
    setTimeout(this.reset,150);
  }

  handleDone = () => {
    this.props.onChange(this.props.id, this.state.value);
  }

  reset = () => {
    this.setState({ value: this.props.value });
  }

  renderDoneButton = () => {
    return this.state.value != this.props.value ? <Icon icon="done" action={this.handleDone} className="small square"/> : '';
  }

  renderField = () => {
    return this.props.info ?
      <h4>{this.state.value}</h4> :
      <input className="info-value" value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
  }

  render() {
    return (
      <div className="info" onBlur={this.handleBlur}>
        <label className="info-label">{this.props.label}</label>
        {this.renderField()}
        {this.renderDoneButton()}
      </div>
    )
  }

}

/**
 * Field
 */
const Field = ({id, type='text', label, value, required, onChange }) => {

  const handleChange = (e) => {
    onChange(e.target.id, e.target.value);
  };

  const text = required ? `* ${label}` : label;
  const notEmpty = value && value.length > 0 ? 'notEmpty' : '';

  return (
    <div className="field">
      <div className="field-box">
        <input id={id} type={type} value={value} onChange={handleChange} required={required} className={notEmpty}/>
        <label>{text}</label>
        <div className="field-line" />
      </div>
    </div>
  )
}

/**
 * Select
 */
const Select = ({id, label, options, required, value, className, onChange }) => {

  const handleChange = (e) => {
    onChange(id, e.target.value);
  };

  const text = required ? `* ${label}` : label;
  const renderLabel = label ? <label className="info-label">{text}</label> : '';
  return (
    <div className="info">
      {renderLabel}
      <select className={`info-value ${className}`} onChange={handleChange} value={value}>
        {options.map(option => <option value={option.value}>{option.label}</option>)}
      </select>
    </div>
  )
}

/**
 * SearchBox
 */
const SearchBox = (props) => {
  return (
    <div className="searchBox">
      <Icon icon="search" />
      <Field icon="filter" onChange={props.onChange}/>
      <Icon icon="close" />
    </div>
  )
}

export { Field, SearchBox, InfoField, Select };
