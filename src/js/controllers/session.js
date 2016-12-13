// IO
import APIClient from '../api/apiClient';

// stores
import session from '../stores/session';

/**
 * Session controller
 */
const SessionController = {

  rolFor : {
    'p_lopez': 'compras',
    'i_diaz': "marketing",
    'b_gonzalez': "marketing",
    'j_huete': "ppv",
    'j_rayon': "realizacion",
  },

  login(nickName, password, done, onError) {
    APIClient.authenticate(nickName, password, (token) => {
        session.init(token, this.rolFor[nickName], nickName);
        //APIClient.me((data) => {
          done();
        //})
      }, onError);
  },

  logout() {}

}

export default SessionController;
