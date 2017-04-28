import mobx from 'mobx';
import { observable, computed } from 'mobx';

class ArtStore {

  @observable _budgets = [];
  @observable _budget = {};

  @computed get budgets() {
    return this._budgets;
  }

}

const singleton = new art-pageStore();
export default singleton;
