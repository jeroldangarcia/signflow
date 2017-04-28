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

  contacts(id, onSucess, onError) {
    const CONTACTS = `/api/users/${id}/contacts`;
    http.GET(CONTACTS, onSucess, errorHandler(onError));
  },

  newContact(id, contact, onSuccess, onError) {
    const CONTACTS = `/api/users/${id}/contacts`;
    http.POST(CONTACTS, contact, onSuccess, errorHandler(onError));
  },

  customers(onSuccess, onError) {
    const CUSTOMERS = '/api/users';
    http.GET(CUSTOMERS, onSuccess, errorHandler(onError));
  },

  newCustomer(customer, onSuccess, onError) {
    const CUSTOMERS = '/api/users';
    const body = JSON.stringify(customer);
    http.POST(CUSTOMERS, body, onSuccess, errorHandler(onError));
  }

}

export default APIClient;
