import React from 'react';

// chips
import Icon from '../components/icon';
import Page from '../components/page';
import Header from '../components/header';

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
