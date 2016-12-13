import React from 'react'
import './icon.scss';

const Icon = (props) => {
  const decorator = props.decorator ? <span className="decorator material-icons">{props.decorator}</span> : '';
  return (
    <span className={`icon material-icons ${props.className}`} onClick={props.action}>{props.icon}{decorator}</span>
  )
}

export default Icon;
