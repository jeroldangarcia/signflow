import React from 'react';
import { Page, Toolbar } from 'tatami';

class CampaignsPage extends React.Component {

  renderHeader = () => {
    return (
      <Toolbar icon="card_giftcard" title="CAMPAÑAS" >
        xxx
      </Toolbar>
    )
  }

  render() {
    return (
      <Page
        className="campaigns-page"
        fixedHeader={this.renderHeader}
      >
        campaigns
      </Page>
    )
  }
}

export default CampaignsPage;
