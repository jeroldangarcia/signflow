import React from 'react';

// components
import Header from './header';
import Icon from './icon';

// css
import './drawer.scss';

// constants
const CHEVRON_LEFT = 'chevron_left';
const CHEVRON_RIGHT = 'chevron_right';

/**
 * Drawer
 */
class Drawer extends React.Component {

  static defaultProps = {
    position: 'FIXED',
    size: 'NORMAL',
  }

  state = {
    position: this.props.position, // FIXED, HIDDEN, FLOAT
    size: this.props.size, // MIN, NORMAL
  };

  icon = this.props.icon ? <Icon icon={this.props.icon} action={this.props.action}/> : null;

  sizes = {
    'MIN': 'minimized',
    'NORMAL': 'normal',
    'MAX': 'maximized',
  }

  toggleSize = () => {
    const next = this.state.size === 'MIN' ? 'NORMAL' : 'MIN';
    this.setState({ size: next});
  }

  render() {
    const chevron = this.state.size === 'MIN' ? CHEVRON_RIGHT : CHEVRON_LEFT;
    return (
      <div className={`drawer ${this.sizes[this.state.size]}`}>
        <Header icon={this.props.icon} title={this.props.title}/>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Drawer;
