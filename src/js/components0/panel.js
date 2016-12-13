import React from 'react';
import Icon from './icon.js';
import './panel.scss';

class Panel extends React.Component {

  defaultProps = {
    open: false,
  }

  state = {
    open: this.defaultProps.open,
  }

  togglePanel = () => {
    const state = this.state.open === false ? true : false;
    this.setState({ open: state });
  }

  renderContent = () => {
    return this.state.open === true ? (
      <div className="content">{this.props.children}</div>
    ) : null;
  }

  render() {
    const toggleIcon = this.state.open === true ? 'keyboard_arrow_up' : "keyboard_arrow_down";
    return(
      <div className={`panel ${this.props.className}`}>
        <header onMouseUp={this.togglePanel}>
          <Icon icon="filter_list"/>
          <span className="title">{this.props.title}</span>
          <Icon icon={toggleIcon}/>
        </header>
        {this.renderContent()}
      </div>
    );
  }
}

export default Panel;
