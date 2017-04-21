import API from '../api/apiClient';
import store from '../stores2/catalog';

const CatalogController = {

  load() {
    API.materials2( data => {
      console.log(data)
      store._materials = data;
    }, console.log);
  }

}

export default CatalogController;
