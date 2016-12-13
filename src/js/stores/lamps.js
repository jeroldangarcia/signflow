import APIClient from '../api/apiClient'

/**
 * Materials Store
 */
const Store = {
  all(done) {
    APIClient.lamps((data) => {
      done(data);
    }, (error) => { console.log(error); });
  }
}

export default Store;
