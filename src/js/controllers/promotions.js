// store
import store from '../stores/promotions';

/**
 * Promotions Controller
 */
const Controller = {

  load(done) {
    store.all(done);
  },

}

export default Controller;
