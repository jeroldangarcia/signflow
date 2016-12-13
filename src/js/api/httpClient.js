import 'whatwg-fetch';

/**
 * Remote and generic http client
 *
 * hardcoded headers :
 * {
 *    Accept: 'application/json',
 *    'Content-Type': 'application/json',
 *    'x-access-token': securityCtx.token,
 * }
 */
const HTTPClient = (domain, securityCtx) => {

  // TODO: validate domain
  // TODO: validate securityCtx

  return {

    DOMAIN: domain,

    GET(URL, handleData, onError) {
      URL = this.DOMAIN + URL;
      // URL = this.DOMAIN + URL;
      this.call('GET', URL, null, handleData, onError);
    },

    POST(URL, body, handleData, onError) {
      URL = this.DOMAIN + URL;
      this.call('POST', URL, body, handleData, onError);
    },

    PATCH(URL, body, handleData, onError) {
      URL = this.DOMAIN + URL;
      this.call('PATCH', URL, body, handleData, onError);
    },

    DELETE(URL, handleData, onError) {
      URL = this.DOMAIN + URL;
      this.call('DELETE', URL, null, handleData, onError);
    },

    call(method, URL, body, handleData, onError) {
      const token = securityCtx ? securityCtx.token() : null;
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token,
      }
      fetch(URL, { method, mode: 'cors', headers, body })
        .then(response => {
          const nextToken = response.headers.get('x-access-token');
          response.ok ? securityCtx.refresh('*') : onError(response);
          return response;
        })
        .then(response => response.json())
        .then(handleData)
        .catch(error => onError);
    }
  }
};

export default HTTPClient;
