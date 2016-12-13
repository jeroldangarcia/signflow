// store
import store from '../stores/materials';

/**
 * Promotions Controller
 */
const Controller = {
  load(done) {
    store.all(done);
  },
}

export default Controller;
