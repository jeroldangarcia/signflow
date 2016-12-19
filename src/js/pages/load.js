import React from 'react';
import { Page } from 'tatami';

const Load = (props) => {

  const goto = () => {
    props.goto('PROMOTIONS');
  }

  return (
    <Page className="nopage">
      <h1>Load</h1>
      <button onMouseUp={goto}>next</button>
    </Page>
  );
};

export default Load;
