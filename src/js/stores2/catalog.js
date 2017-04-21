import mobx from 'mobx';
import { observable, computed, action} from 'mobx';

class MaterialStore {

  @observable _materials = [];
  @observable _material = {};

  @computed get materials() {
    return this._materials;
  }

}

const singleton = new MaterialStore();
export default singleton;
