const DOMAIN = window.DOMAIN;

// IO
import { HTTPClient, Session } from 'tatami';
const http = HTTPClient(DOMAIN, Session);

const MESSAGES = {
  400: 'Los datos enviados no son correctos',
  401: 'Usuario/Contraseña no encontrado.\r\n Por favor identifiquese de nuevo..',
  403: 'Su sesión a caducado.\r\n Por favor identifiquese de nuevo..',
  404: 'Recurso no encontrado.',
  500: 'Error grave de sistema',
  1000: 'Sin Conexion',
}

const errorHandler0 = (onError) => {
  return (response) => {
    const e = {
      status: response.status,
      message: MESSAGES[response.status],
    }
    onError(e);
  }
}

const errorHandler = (onError) => {
  return (response, error) => {
    const status = response && response.status ? response.status : 1000;
    const e = {
      status: status,
      message: MESSAGES[status],
    }
    onError(e);
  }
}

/**
 * API Client
 */
const APIClient = {

  campaigns(onSuccess, onError) {
    const CAMPAIGNS = "/campaigns";
    http.GET(CAMPAIGNS, onSuccess, errorHandler(onError))
  },

  campaign(id, onSuccess, onError) {
    const CAMPAIGN = `/campaigns/${id}`;
    http.GET(CAMPAIGN, onSuccess, errorHandler(onError));
  },

  /**
   * users
   */

  users(onSuccess, onError) {
    const USERS = '/api/users';
    http.GET(USERS, onSuccess, errorHandler(onError));
  },

  createUser(user, onSuccess, onError) {
    const USERS = '/api/users';
    const body = JSON.stringify(user);
    http.POST(USERS, body, onSuccess, errorHandler(onError));
  },

  updateUser(id, field, value, onSuccess, onError) {
    const USER = `/api/users/${id}`;
    const body = JSON.stringify({ [field]: value });
    http.PATCH(USER, body, onSuccess, errorHandler(onError));
  },

  deleteUser(id, onSuccess, onError) {
    const USER = `/api/users/${id}`;
    http.DELETE(USER, onSuccess, errorHandler(onError));
  },

  /*
   * centers
   */
  centers(onSuccess, onError) {
    const CENTERS = '/api/centres';
    http.GET(CENTERS, onSuccess, errorHandler(onError));
  },

  /*
   * promotions
   */
  promotions(onSuccess, onError) {
    const PROMOTIONS = '/api/promotions';
    http.GET(PROMOTIONS, onSuccess, errorHandler(onError));
  },

  /*
   * materials
   */
  materials(onSuccess, onError) {
    const MATERIALS = '/materials';
    http.GET(MATERIALS, onSuccess, errorHandler(onError));
  },

  /*
   * materials
   */
  materials2(onSuccess, onError) {
    const MATERIALS = '/materials2';
    http.GET(MATERIALS, onSuccess, errorHandler(onError));
  },
  /*
   * lamps
   */
  lamps(onSuccess, onError) {
    const LAMPS = '/lamps';
    http.GET(LAMPS, onSuccess, errorHandler(onError));
  },

  subcampaigns(onSuccess, onError) {
    const SUBCAMPAIGNS = '/subcampaigns';
    http.GET(SUBCAMPAIGNS, onSuccess, errorHandler(onError));
  }
}

export default APIClient;
