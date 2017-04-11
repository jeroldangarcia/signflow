import mobx from 'mobx';
import { observable, computed, action} from 'mobx';

class CampaignStore {

  @observable campaigns = [];
  @observable campaign = {};

}

export default CampaignStore;
