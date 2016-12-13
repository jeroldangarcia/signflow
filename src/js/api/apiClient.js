//const DOMAIN = 'https://signflow.herokuapp.com';
const DOMAIN = 'http://localhost:5555';

const URL_AUTHENTICATION = '/api/authenticate';

// stores
import session from '../stores/session';

// IO
import HTTPClient from './HTTPClient.js';
const http = HTTPClient(DOMAIN, session);

const MESSAGES = {
  401: 'Usuario/Contraseña no encontrado.\r\n Por favor identifiquese de nuevo..',
  403: 'Su sesión a caducado.\r\n Por favor identifiquese de nuevo..',
  500: 'Error grave de sistema',
}

const errorHandler = (onError) => {
  return (response) => {
    const e = {
      status: response.status,
      message: MESSAGES[response.status],
    }
    onError(e);
  }
}

/**
 * API Client
 */
const APIClient = {

  authenticate(login, password, onSuccess, onError) {
    const body = JSON.stringify({ login, password });
    //http.POST(URL_AUTHENTICATION, body,
    http.GET(URL_AUTHENTICATION,
      (data) => {
        onSuccess(data.token)
      },
      errorHandler(onError)
    );
  },

  me(onSuccess, onError) {
    const ME = '/api/me';
    http.GET(ME, onSuccess, onError);
  },

  /**
   * users
   */

  users(onSuccess, onError) {
    const USERS = '/api/users';
    http.GET(USERS, onSuccess, onError);
  },

  createUser(user, onSuccess, onError) {
    const USERS = '/api/users';
    const body = JSON.stringify(user);
    http.POST(USERS, body, onSuccess, onError);
  },

  updateUser(id, field, value, onSuccess, onError) {
    const USER = `/api/users/${id}`;
    const body = JSON.stringify({ [field]: value });
    http.PATCH(USER, body, onSuccess, onError);
  },

  deleteUser(id, onSuccess, onError) {
    const USER = `/api/users/${id}`;
    http.DELETE(USER, onSuccess, onError);
  },

  /*
   * centers
   */
  centers(onSuccess, onError) {
    const CENTERS = '/api/centres';
    http.GET(CENTERS, onSuccess, onError);
  },

  /*
   * promotions
   */
  promotions(onSuccess, onError) {
    const PROMOTIONS = '/api/promotions';
    http.GET(PROMOTIONS, onSuccess, onError);
  },

  /*
   * materials
   */
  materials(onSuccess, onError) {
    const MATERIALS = '/api/materials';
    http.GET(MATERIALS, onSuccess, onError);
  },

  /*
   * lamps
   */
  lamps(onSuccess, onError) {
    const LAMPS = '/api/lamps';
    http.GET(LAMPS, onSuccess, onError);
  },
}

export default APIClient;