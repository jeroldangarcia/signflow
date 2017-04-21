import React from 'react';
import { Page } from 'tatami';
import CampaignsHeader from './campaignsHeader';
import { CampaignsList, CampaignsListToolbar } from './campaignsList';
import controller from '../controllers2/campaigns';

class Campaigns extends React.Component {

  componentWillMount() {
    controller.loadCampaigns();
  }

  header = <CampaignsHeader />
  stickyHeader = <CampaignsListToolbar />

  render() {
    return (
      <Page className="campaigns-page"
        threshold={0}
        fixedHeader={this.header}
        stickyHeader={this.stickyHeader}>
        <CampaignsList />
      </Page>
    )
  }
}

export default Campaigns;
