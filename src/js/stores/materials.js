import APIClient from '../api/apiClient'

/**
 * Materials Store
 */
const Store = {
  all(done) {
    APIClient.materials((data) => {
      done(data);
    }, (error) => { console.log(error); });
  }
}

export default Store;
