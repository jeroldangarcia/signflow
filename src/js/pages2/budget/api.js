//const DOMAIN = window.DOMAIN;
const DOMAIN = "http://localhost:3000";

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
const API = {

  budget(id, onSuccess, onError) {
    const BUDGET = `/budgets/${id}`;
    http.GET(BUDGET, onSuccess, errorHandler(onError));
  }

}

export default API;
