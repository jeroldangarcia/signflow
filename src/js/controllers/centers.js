// IO
import APIClient from '../api/apiClient';

// store
import centers from '../stores/centers';

/**
 * Centers CentersController
 */
const CentersController = {

  load(done) {
    APIClient.centers((data) => {
      centers.load(data);
      done();
    });
  }
}

export default CentersController;
