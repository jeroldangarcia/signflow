import React from 'react';

const Page = (props) => {
  const title = props.title ? <h3>{props.title}</h3> : '';
  return (
    <div className={`page ${props.className}`}>
      {title}
      {props.children}
    </div>
  )
}

export default Page;
