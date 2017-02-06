import React from 'react';

//components
import { Icon } from 'seito';

//styles
import './timeline.scss';

/**
 * TimeLine Component
 */
class Timeline extends React.Component {

  state = {
    token: null,
  }

  dotSelectedHandler = (token) => {
    return () => {
      this.setState({ token });
      this.props.onTokenSelected(token)
    }
  }

  renderLine = () => {
    return this.props.tokens.map(token => {
      return (
        <div className="token">
          <div className={`dot ${token.state}`} onMouseDown={this.dotSelectedHandler(token)}>
            <Icon icon={token.icon} />
            <span className="line" />
          </div>
          <label>{token.label}</label>
        </div>
      );
    });
  }

  renderInfo = () => {
    return this.state.token ? <div className="token-info">{this.state.token.state}</div> : '';
  }

  render() {
    return (
      <div className="timeline">
        <div className="line">{this.renderLine()}</div>
        {this.renderInfo()}
      </div>
    );
  }
}

export default Timeline;
