import store from './store';
import API from './apiClient';

const CatalogController = {
  getAll() {
    API.catalog((data) => {
      store.catalog = data;
    }, console.log);
  },
}

export default CatalogController;
