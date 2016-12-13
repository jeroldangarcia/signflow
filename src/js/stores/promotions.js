import APIClient from '../api/apiClient'

/**
 * Promotions Store
 */
const Store = {
  all(done) {
    APIClient.promotions((data) => {
      done(data);
    }, (error) => { console.log(error); });
  }
}

export default Store;
