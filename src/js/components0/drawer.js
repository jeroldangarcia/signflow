import React from 'react';
import Header from './header';
import Icon from './icon';
import './drawer.scss';

const Drawer = (props) => {

  const icon = props.icon ? <Icon icon={props.icon} action={props.action}/> : null;

  return (
    <div className="drawer">
      <Header icon="cloud" />
      <main>
        <Icon icon="person" />
        <hr/>
        {props.children}
      </main>
      <footer>
        <Icon icon="chevron_right" />
      </footer>
    </div>
  )
}
export default Drawer;
