import React from 'react';
import { Page } from 'tatami';

/**
 * Page
 */
const Splash = (props) => {

  const exit = () => {
    props.goto('SPLASH');
  }

  const goto = () => {
    props.goto('LOGIN');
  }

  return (
    <Page className="nopage white">
      <img src="./idossiers_icon_128.png" style={{ width: '128px', height: '128px'}}/>
      <button onMouseUp={goto}>next</button>
    </Page>
  );
};

export default Splash;
