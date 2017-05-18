import mobx from 'mobx';
import { observable, computed, action} from 'mobx';

class CatalogStore {

  @observable _catalog = {};

  @computed get catalog() {
    return this._catalog;
  }

  set catalog(data) {
    this._catalog = data;
  }

  @computed get categories() {
    return this._catalog.categories || [];
  }

  @computed get categoryRoot() {
    return this.categories.filter( category => {
      return category.parent === 0;
    });
  }

  @computed get contents() {
    return this._catalog.products || [];
  }
}

const singleton = new CatalogStore();
export default singleton;
