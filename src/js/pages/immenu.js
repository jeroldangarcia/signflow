import React from 'react';
import { Page,  } from 'tatami';
import { Button } from 'seito';

class IMMenu extends React.Component {

  handleOK = () => {
    this.props.goto("CAMPAIGNS");
  }

  render() {
    return (
      <Page>
        <div style={{ display: 'flex', justifyContent:'center'}}>
          <img src="immenu3.png" width="100%" height="600" onMouseUp={this.handleOK}/>
        </div>
      </Page>
    )
  }
}

export default IMMenu;
