import API from '../api/apiClient';
import store from '../stores2/campaigns';

const CampaignsController = {

  loadCampaigns(cia, period, season, state) {
    API.campaigns( data => {
      store._campaigns = data;
    }, console.log);
  }

}

export default CampaignsController;
