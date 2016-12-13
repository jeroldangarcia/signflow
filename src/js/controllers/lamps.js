// store
import store from '../stores/lamps';

/**
 * LAMPs Controller
 */
const Controller = {

  load(done) {
    store.all(done);
  },

}

export default Controller;
